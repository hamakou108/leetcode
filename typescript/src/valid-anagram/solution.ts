export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const sortedS = Array.from(s).sort().join('');
  const sortedT = Array.from(t).sort().join('');
  return sortedS === sortedT;
};

