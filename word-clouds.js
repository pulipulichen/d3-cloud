document.getElementById('download-word-clouds-data').addEventListener('click', function () {
  let t = d3.select("#text").property("value")
  
  /*
  var tags = {};
  var e = {},
    n = d3.select("#per-line").property("checked");
  t.split(n ? /\n/g : wordSeparators).forEach(function (t) {
    discard.test(t) || (n || (t = t.replace(punctuation, "")), stopWords.test(t.toLowerCase()) || ((t = t.substr(0, maxLength)), (e[t.toLowerCase()] = t), (tags[(t = t.toLowerCase())] = (tags[t] || 0) + 1)));
  }),
    (tags = d3.entries(tags).sort(function (t, e) {
      return e.value - t.value;
    })),
    tags.forEach(function (t) {
      t.key = e[t.key];
    });
  
  let output = tags.map(({key, value}) => key + '\t' + value).join('\n')
  */
  let output = t
  
  var blob = new Blob([output], {type: "text/plain;charset=utf-8"});
  saveAs(blob, 'word-cloud_' + (new Date()).mmddhhmm() + '.txt')
})