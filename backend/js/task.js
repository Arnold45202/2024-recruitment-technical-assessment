
/**
 * Task 1
 */
function leafFiles(files) {
    // this is to create parentIds so its set to store the IDs of all parent files
    const parentIds = new Set(files.map(file => file.parent).filter(id => id !== -1));

    // this would filter the files to get those are not listed as a parent 
    // then we can map over the files to extract an array wit hthe names
    const leafFileNames = files.filter(file => !parentIds.has(file.id)).map(file => file.name);

    return leafFileNames;
}

/**
 * Task 2
 */
function kLargestCategories(files, k) {
    // created a map to count the occurences of each catergory
    const categoryCounts = new Map();

    // this would iterate over the files to populate the categoryCounts map
    files.forEach(file => {
        file.categories.forEach(category => {
            categoryCounts.set(category, (categoryCounts.get(category) || 0) + 1);
        });
    });

    // then it would convery the map into an pair of category and count pairs
    const categoryArray = Array.from(categoryCounts.entries());

    // i want to sort the array in alphabetaical order than i do it by deceding order
    categoryArray.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        }
        return b[1] - a[1];
    });

    // lastly would map teh sorted array to get teh category names and slice and get teh 0 to k elements 
    return categoryArray.map(entry => entry[0]).slice(0, k);
}

/**
 * Task 3
 */
function largestFileSize(files) {
    // this would check if files is 0 or it wont work
    if (files.length === 0) return 0;

    // create a map for the parent -child relationships
    const parentChildMap = new Map(); 
    files.forEach(file => {
        if (!parentChildMap.has(file.parent)) {
            parentChildMap.set(file.parent, []);
        }
        parentChildMap.get(file.parent).push(file);
    });

    // this function would calculate the total size of a file and it would use recursive to get its children sizes 
    const calculateTotalSize = (file) => {
        let totalSize = file.size;
        const children = parentChildMap.get(file.id) || [];
        children.forEach(child => {
            totalSize += calculateTotalSize(child);
        });
        return totalSize;
    };

        // this would calculate teh totla size 
    let maxSize = 0;
    files.forEach(file => {
        if (file.parent === -1) { 
            const totalSize = calculateTotalSize(file);
            if (totalSize > maxSize) {
                maxSize = totalSize;
            }
        }
    });

    return maxSize;
}


function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

const testFiles = [
    { id: 1, name: "Document.txt", categories: ["Documents"], parent: 3, size: 1024 },
    { id: 2, name: "Image.jpg", categories: ["Media", "Photos"], parent: 34, size: 2048 },
    { id: 3, name: "Folder", categories: ["Folder"], parent: -1, size: 0 },
    { id: 5, name: "Spreadsheet.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 4096 },
    { id: 8, name: "Backup.zip", categories: ["Backup"], parent: 233, size: 8192 },
    { id: 13, name: "Presentation.pptx", categories: ["Documents", "Presentation"], parent: 3, size: 3072 },
    { id: 21, name: "Video.mp4", categories: ["Media", "Videos"], parent: 34, size: 6144 },
    { id: 34, name: "Folder2", categories: ["Folder"], parent: 3, size: 0 },
    { id: 55, name: "Code.py", categories: ["Programming"], parent: -1, size: 1536 },
    { id: 89, name: "Audio.mp3", categories: ["Media", "Audio"], parent: 34, size: 2560 },
    { id: 144, name: "Spreadsheet2.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 2048 },
    { id: 233, name: "Folder3", categories: ["Folder"], parent: -1, size: 4096 },
];

console.assert(arraysEqual(
    leafFiles(testFiles).sort((a, b) => a.localeCompare(b)),
    [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]
));

console.assert(arraysEqual(
    kLargestCategories(testFiles, 3),
    ["Documents", "Folder", "Media"]
));

console.assert(largestFileSize(testFiles) == 20992)

const nestedFilesTest = [
    { id: 1, name: "NestedDoc.txt", categories: ["Documents"], parent: 2, size: 500 },
    { id: 2, name: "SingleParentFolder", categories: ["Folder"], parent: -1, size: 0 }
];

console.assert(arraysEqual(
    leafFiles(nestedFilesTest).sort((a, b) => a.localeCompare(b)),
    ["NestedDoc.txt"]
), "Test failed: Expected to find 'NestedDoc.txt' as the only leaf file in a nested structure.");

const equalCategoriesTest = [
    { id: 1, name: "EqualCatDoc1.txt", categories: ["EqualCat1"], parent: -1, size: 100 },
    { id: 2, name: "EqualCatDoc2.txt", categories: ["EqualCat2"], parent: -1, size: 100 }
];

console.assert(arraysEqual(
    kLargestCategories(equalCategoriesTest, 2),
    ["EqualCat1", "EqualCat2"]
), "Test failed: Expected categories to be sorted alphabetically when counts are equal.");

const complexFilesTest = [
    { id: 1, name: "RootFolder", categories: ["Folder"], parent: -1, size: 0 },
    { id: 2, name: "ChildFolder1", categories: ["Folder"], parent: 1, size: 0 },
    { id: 3, name: "ChildFolder2", categories: ["Folder"], parent: 1, size: 0 },
    { id: 4, name: "File1", categories: ["Documents"], parent: 2, size: 1000 },
    { id: 5, name: "File2", categories: ["Documents"], parent: 3, size: 2000 },
    { id: 6, name: "SubChildFolder", categories: ["Folder"], parent: 2, size: 0 },
    { id: 7, name: "FileInSubChild", categories: ["Documents"], parent: 6, size: 3000 }
];

console.log(largestFileSize(complexFilesTest) === 6000);