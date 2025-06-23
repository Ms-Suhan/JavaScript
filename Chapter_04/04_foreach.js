const coding = ["js", "ruby", "java", "cpp", "python"]


// coding.forEach((item)=>(console.log(item)))

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: 'js'
    },
    {
        languageName: "Python",
        languageFileName: 'py'
    },
    {
        languageName: "java",
        languageFileName: 'java'
    },
    {
        languageName: "typescript",
        languageFileName: 'ts'
    }
]


mycoding.forEach((item) => {
    console.log(item.languageFileName)
})