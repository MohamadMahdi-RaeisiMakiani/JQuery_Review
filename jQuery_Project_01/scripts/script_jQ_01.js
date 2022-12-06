$(document).ready(main);

function main() {
	jQuery(":root").css("background-color", "lightblue");

	function divSelector_1() {
		let divElements = $("div");
		let spanElements = $("#bordered-span:first-child");
		let div_span_Elements = $("div, span");
		let titleElementsSelector = $("div[title]");
		let myBooksList = $("p[data-equipments='book']");
		let myInputs_1 = $(":input:not('button, #someValue-1')");
		let docParas_1 = $("p");
		// console.log(divElements);
		// console.log(divElements[0]);
		// console.log(divElements[0].innerText);
		divElements.each(function () {
			// console.log("Inside HTML is:", $(this).html());
			// console.log(this.innerHTML);
			// console.log("The Text is:", this.innerText);
			return true;
		});
		// console.log(div_span_Elements.length);
		// console.log(divElements.length);
		spanElements.css("border", "2px solid red");
		titleElementsSelector.css("text-align", "center");
		titleElementsSelector.css("margin", "1rem auto");
		titleElementsSelector.css("border", "3px solid black");
		myBooksList.css("color", "green");
		myInputs_1.css("background-color", "yellow");
		docParas_1.each(function (index = null) {
			// console.log(docParas_1[index]);
			return 0;
		});
		let buttunSelector_1 = $("#input-valueChanger");
		let buttunSelector_3 = $("#input-valueCleaner");
		buttunSelector_1.click(function () {
			myInputs_1.each(function () {
				let inputsSelector_1 = $(this);
				// console.log(inputsSelector_1.val());
				inputsSelector_1.val(
					`${inputsSelector_1.val()} ... The same value!`
				);
			});
		});
		buttunSelector_3.click(function () {
			myInputs_1.each(function () {
				let inputsSelector_1 = $(this);
				inputsSelector_1.val("");
			});
		});
		buttunSelector_1[0].title = "This is the title for button";
		// console.log(buttunSelector_1[0].title);

		myBooksList.each(function (index) {
			$(this).attr("title", `Title ${index}`);
			$(this).attr({
				id: `my-para-${index + 1}`,
				class: "para-class",
				lang: "en",
				dir: "ltr",
			});
			// css function can use JSON like before
			if (index == 3) {
				$(this)
					.attr({
						contenteditable: "true",
						style: "text-align: center; font-size: 1.5rem; color: green",
					})
					.css("background-color", "#f3f38b")
					.css("width", "30rem")
					.css("border-radius", "0.5rem");
			}
			if (index == 2) {
				$(this).attr("draggable", "true");
			}
		});
		let docParas_2 = $("#another-para");
		docParas_2.append("<span> (Unfuck Yourself book)</span>");
		docParas_2.prepend("<span>Number 1: </span>");
		$("<span> But this text was appended ... </span>").appendTo(
			"#clean-para"
		);
		$("<span>Number 2: </span>").prependTo("#clean-para");
	}
	function divSelector_2() {
		$(".numberic-paras").wrap("<div class='wrappedDiv' />");
		$("div.wrappedDiv").each(function () {
			// console.log($(this).html());
			return 0;
		});
		// $("div.wrappedDiv").remove();
		$("div.wrappedDiv").css({
			"background-color": "limegreen",
			"text-decoration": "underline",
		});
		$("#show-textSorts, #rmClass-text").addClass("bgColored-text");
		let writesDiv_Selector = $("#novel-authors p, #someValue-1");
		writesDiv_Selector.each(function (index) {
			console.log("self:", writesDiv_Selector[index]);
			console.log("HTML:", $(this).html().trim());
			console.log("TEXT:", $(this).text().trim());
			console.log("VALUE:", $(this).val());
		});
	}

	divSelector_1();
	divSelector_2();

	let state_Selector = $("#states-box");
	let cities_TH_Selector = $(".all-cities");
	state_Selector.change(function () {
		let selecteState_Value = $(this).val();
		// console.log($(this).val());
		cities_TH_Selector.each(function () {
			$(this).addClass("hide-cities");
		});
		cities_TH_Selector.each(function () {
			if ($(this).val() === selecteState_Value) {
				$(this).toggleClass("hide-cities");
			}
		});
	});
	let all_Paras_2 = $("p");
	all_Paras_2.bind("mouseenter mouseleave", function (event) {
		$(this).toggleClass("red-texts");
		$(this).css("cursor", "pointer");
		// console.log(event.type);
	});
	all_Paras_2.each(function () {
		if ($(this).attr("id") === "show-textSorts") {
			$(this).unbind();
		}
	});
}

function divSelector_3() {
	// it works and remove the class of the selected element
	// $("#rmClass-text").removeClass("bgColored-text");
	$("#rmClass-text").toggleClass("bgColored-text");
}

function changeBgColor(someElement) {
	$(someElement).toggleClass("pinkerInput");
}

// or using
// $("body").css("background-color", "yellow");
// and in indexedDB.html put script tag before closing bdy

// or using
// defer at the end of script tags in the indexedDB.html

// $("div:contains('x')") we have x in the element innerText
// $("tr:odd")
// $("tr:even")
// $("tr:first-child")
// $("div[title$='x']"); x at the end
// $("div[title^='x']"); x at the first
// $("div[title*='x']"); x in the title of element
// $("div[title*='x']").html("We have the new value for this element");
// the $ and word (jQuery) do the same in jquery library
// $("div span") father or grandfather or bla bla ...
// $("div>span") just father!
// siblings and parrent nodes
// hasClass() to check the element class
// removeAttr()
// remove()
// removeData()

// Events in jQuery
// --------------------------------
// x.mousedown
// x.mouseup
// x.y.target
// x.change
// x.mouseleave
// x.mouseout
