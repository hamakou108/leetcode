export function firstUniqChar(s: string): number {
  const occurencesArray = new Array<number>();

  Array.from(s).forEach((e) => {
    const index = e.charCodeAt(0) - 'a'.charCodeAt(0);
    const occurences = occurencesArray[index];

    if (typeof occurences === 'undefined') {
      occurencesArray[index] = 1;
      return;
    }

    occurencesArray[index]++;
  });

  const firstUniqCharIndex = Array.from(s).findIndex((e) => {
    const index = e.charCodeAt(0) - 'a'.charCodeAt(0);
    return occurencesArray[index] === 1;
  });

  return firstUniqCharIndex;
};

