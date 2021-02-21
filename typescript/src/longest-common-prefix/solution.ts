export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return '';
  }

  const longestCommonPrefix = strs.reduce((commonPrefix, str, index) => {
    if (commonPrefix === '') {
      return '';
    }

    if (index === 0) {
      return str;
    }

    const strArray = Array.from(str);
    const unmatchedIndex = Array.from(commonPrefix).findIndex((char, index) => {
      return char !== strArray[index];
    });

    if (unmatchedIndex === -1) {
      return commonPrefix;
    }
    return commonPrefix.slice(0, unmatchedIndex);
  });

  return longestCommonPrefix;
};

