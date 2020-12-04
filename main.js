$(document).ready(function() {
  document.getElementById("s").focus();
});

$("input[type=text]").on("input", function() {
  $("input[type=text]");
  const editDistance = editDistance();
  $(".output").text(editDistance);
});

function editDistance(s, t) { // aka levenshtein distance
  let i, j; // source index and target index
  let matrix = setMatrix(s, t);
  let cost;

  for (i = 1; i <= s.length; i++) {
    for (j = 1; j <= t.length; j++) {
      cost = (s.charAt(i - 1) == t.charAt(j - 1)) ? 0 : 1;

      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }

  console.log("matrix: ", matrix);
  return editDistance;
}

function setMatrix(s, t) {
  let matrix = [];

  for (i = 0; i <= s.length; i++)
    matrix[i] = [i];
  for (j = 0; j <= t.length; j++)
    matrix[0][j] = j;

  return matrix;
}

