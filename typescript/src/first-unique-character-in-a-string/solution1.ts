export function firstUniqChar(s: string): number {
  const occurencesMap = new Map<string, number>();

  Array.from(s).forEach((e) => {
    if (occurencesMap.has(e)) {
      return occurencesMap.set(e, occurencesMap.get(e) as number + 1);
    }

    occurencesMap.set(e, 1);
  });

  const firstUniqCharIndex = Array.from(s).findIndex((e) => {
    return occurencesMap.get(e) === 1;
  });

  return firstUniqCharIndex;
};

