$(document).ready(function() {
  document.getElementById("source").focus();

  $("input[type=text]").on("input", function() { checkSimilarity(); });
});

function checkSimilarity() {
  const source = document.getElementById("source").value.toLowerCase();
  const target = document.getElementById("target").value.toLowerCase();
  const output = document.getElementById("output");

  if (source.length == 0 || target.length == 0) {
    output.innerHTML = "<strong>Provide 2 strings to compare</strong>";
    return;
  }
  output.innerHTML = `
    <p>Edit distance: <strong>${editDistance(source, target)}</strong></p>
  `;
}
