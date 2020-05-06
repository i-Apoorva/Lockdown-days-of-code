/** Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let m=magazine.length
    let r=ransomNote.length
    if(ransomNote===""){
        return true
    }
    var count=0
    for(let char of ransomNote){
        if(magazine.includes(char)){
        magazine = magazine.replace(char,'/');
         count++
        }
    }
    if(count===r){
    return true
    }
    return false
};