/**
 * Function to create user profiles
 * @param {string[]} names - Original array of names.
 * @param {string[]} modifiedNames - Array of modified names.
 * @returns {Object[]} Array of user profiles with originalName, modifiedName, and id.
 */
function createUserProfiles(names, modifiedNames) {
  if (names.length !== modifiedNames.length) {
    throw new Error("Both arrays must have the same length");
  }

  return names.map((name, index) => ({
    id: index + 1,
    originalName: name,
    modifiedName: modifiedNames[index]
  }));
}

// Example usage:
const names = ['Hello', 'World', 'OpenAI', 'GPT-3'];
const modifiedNames = ['hello', 'WORLD', 'openai', 'GPT-3'];
const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);
// Output: 
// [
//   { id: 1, originalName: 'Hello', modifiedName: 'hello' },
//   { id: 2, originalName: 'World', modifiedName: 'WORLD' },
//   { id: 3, originalName: 'OpenAI', modifiedName: 'openai' },
//   { id: 4, originalName: 'GPT-3', modifiedName: 'GPT-3' }
// ]

// Export the function for use in other files
module.exports = { createUserProfiles };
