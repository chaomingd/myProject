var str = `
<ul>
		<%= data[0] %>
    <% for(var i in data){ %>
        <li><%= data[i] %></li>
    <% } %>
</ul>
`;

var matcher = /<%=([\s\S]+?)%>|<%([\s\S]+?)%>|$/g

//模板文本中的特殊字符转义处理
var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/mg;

function template(text,data) {
	var index = 0;
	text = text.replace(escaper,'');
	text = text.replace(/(\s{2,})+/g,' ')
	console.log(text)
	var result;
	var functionBody = "var temp = '';";
	functionBody += "temp += '"
	text.replace(matcher,function(match,interpolate,evaluate,offset) {
		functionBody += text.slice(index,offset);
		if(interpolate) {
			functionBody += "' +" + interpolate + "+ '"
		}
		if(evaluate) {
			functionBody += "';" + evaluate + "temp += '";
		}
		index = offset + match.length;
		return match;
	})
	functionBody += "';"
}

template(str,[1,2,3]);