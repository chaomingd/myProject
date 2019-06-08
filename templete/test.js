var str = `
<ul>
		<%= items[0] %>
    <% for(var i in items){ %>
        <li><%= items[i] %></li>
    <% } %>
</ul>
`;

var matcher = /<%=([^%]+)?%>|<%([^%]+)?%>/g;

var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;


function template(str) {
	var text = str.replace(escaper,'')
	var index = 0;
	var function_body = "with(data) {var temp = '';";
	function_body += "temp += '";
	text.replace(matcher,function(match,interpolate,evaluate,offset) {
		function_body += text.slice(index,offset);
		if(interpolate) {
			function_body += "' +" + interpolate + "+ '"
		}
		if(evaluate) {
			function_body += "';" + evaluate + "temp += '"
		}
		index = offset + match.length;
		
		return match;
	})
	function_body += "'; return temp;}"
	console.log(function_body)
	var render = new Function("data",function_body);
	return render;
}
var render = template(str,{items: [0,1,2,3,4]})
console.log(render({items: [0,1,2,3,4]}));
console.log(render({items: [0,1,2,3,4]}));