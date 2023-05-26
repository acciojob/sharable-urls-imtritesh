// your code here
let name = document.getElementById("name");
let year = document.getElementById("year");
let url = document.getElementById("url");
let url1 = url.innerText;

document.getElementById("button").addEventListener("click",function(){
	event.preventDefault();
	url.textContent = `${url1}?${name!=""?`name=${name.value}&`:""}${year!=""?`year=${year.value}`:""}`;
});
