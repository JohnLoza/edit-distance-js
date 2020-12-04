function editDistance(s, t) { // aka levenshtein distance
  let matrix = setMatrix(s, t);
  let cost;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      cost = (s.charAt(i - 1) == t.charAt(j - 1)) ? 0 : 1;

      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }

  return matrix[s.length][t.length];
}

function setMatrix(s, t) {
  let matrix = [];

  for (let i = 0; i <= s.length; i++)
    matrix[i] = [i];
  for (let j = 0; j <= t.length; j++)
    matrix[0][j] = j;

  return matrix;
}
