// array for objects to store zodiac data
var zodiac = [
	{
		sign: "Rat",
		personality: "The Rat is highly imaginative, charming and very generous. They can sometimes be quick tempered and overly critical.",
		image: "img/animals/rat.png",
		birthYear: [2020, 2008, 1996, 1984, 1972, 1960, 1948, 1936, 1924, 1912,1900],
	},
	{
		sign: "Ox",
		personality: "The Ox is full of strength and a born leader, they are methodical and good with their hands. They can also be introverted and often feel misunderstood.",
		image: "img/animals/ox.png",
		birthYear: [2009, 1997, 1985, 1973, 1961, 1949, 1937, 1925, 1913, 1901],
	},
	{
		sign: "Tiger",
		personality: "Tigers are strong but very emotional and sensitive. They can get stubborn over things that they believe to be right or true.",
		image: "img/animals/tiger.png",
		birthYear: [2010, 1998, 1986, 1974, 1962, 1950, 1938, 1926, 1914, 1902],
	},
	{
		sign: "Rabbit",
		personality: "Rabbits are kind, affectionate but often over cautious and can be superficial at times.",
		image: "img/animals/rabbit.png",
		birthYear: [2011, 1999, 1987, 1975, 1963, 1951, 1939, 1927, 1915, 1903],
	},
	{
		sign: "Dragon",
		personality: "Dragons are witty, enthusiastic, popular, intelligent and gifted yet are also perfectionists.",
		image: "img/animals/dragon.png",
		birthYear: [2012, 2000, 1988, 1976, 1964, 1952, 1940, 1928, 1916, 1904],
	},
	{
		sign: "Snake",
		personality: "Snakes are wise, romantic, deep thinkers heavily guided by their intuition. They do not trust others easily and have trouble accepting criticism.",
		image: "img/animals/snake.png",
		birthYear: [2013, 2001, 1989, 1977, 1965, 1953, 1941, 1929, 1917, 1905],
	},
	{
		sign: "Horse",
		personality: "Horses are very capable of hard work, independent and intelligent. However, they can sometimes be very selfish.",
		image: "img/animals/horse.png",
		birthYear: [2014, 2002, 1990, 1978, 1966, 1954, 1942, 1930, 1918, 1906],
	},
	{
		sign: "Goat",
		personality: "Goat are often elegant and artistic and like to be part of a group. They are good with people but tend to step off on the wrong foot.",
		image: "img/animals/goat.png",
		birthYear: [2015, 2003, 1991, 1979, 1967, 1955, 1943, 1931, 1919, 1907],
	},
	{
		sign: "Monkey",
		personality: "Monkeys are very popular and have a magnetic personality. They can however get very competitive.",
		image: "img/animals/monkey.png",
		birthYear: [2016, 2004, 1992, 1980, 1968, 1956, 1944, 1932, 1920, 1908],
	},
	{
		sign: "Rooster",
		personality: "Roosters are very smart dressers, hard workers and dreamers. They have a tendency of speaking their minds all the time which isn't always a good thing!",
		image: "img/animals/rooster.png",
		birthYear: [2017, 2005, 1993, 1981, 1969, 1957, 1945, 1933, 1921, 1909],
	},
	{
		sign: "Dog",
		personality: "Dogs will never let you down, they are honest, and faithful, they put others first but often worry too much.",
		image: "img/animals/dog.png",
		birthYear: [2018, 2006, 1994, 1982, 1970, 1958, 1946, 1934, 1922, 1910],
	},
	{
		sign: "Pig",
		personality: "Pigs are very tolerant, kind and courteous with inner strength. They can be naive and too impulsive at times.",
		image: "img/animals/pig.png",
		birthYear: [2019, 2007, 1995, 1983, 1971, 1959, 1947, 1935, 1923, 1911],
	},
];

// This is code so the enter key also fires (runs/invokes/instatiates) the function
var btn = document.getElementById('userdata');
btn.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		zodiacSign();
	};
}, false);

// fucntion to determine user zodiac sign, function fires on user clicking button line index.html
function zodiacSign() {
	// store the tag with id="sign" in var userdata
	var userdata = document.getElementById("userdata");

	// confirm the element exists and what value the user submits
	console.log(userdata);
	console.log("users value is: " + userdata.value);

	// loop through zodiac array one item at a time
	for(var i = 0; i < zodiac.length; i++) {
		// check what the users value is before using it in a condition
		console.log("users value is: " + userdata.value);
		console.log("current zodiac sign in loop is: " + zodiac[i].sign);

		// check the current item's year in the birthYear array
		for(var u = 0; u < zodiac[i].birthYear.length; u++) {
			// check the current item's year in the zodiac array
			console.log("current year in loop is: " + zodiac[i].birthYear[u]);

			// if the value the user typed in is equal to one of our years, then we do something
			if(userdata.value == zodiac[i].birthYear[u]) {
				// confirm the if statement ran
				console.log("if statement ran");

				// check some values in the console before updating HTML
				console.log("users typed in: " + userdata.value);
				console.log("current image value is: " + zodiac[i].image);
				console.log("current personality value is: " + zodiac[i].personality);

				// get the element with id="userSign" and change the text to the user input
				document.getElementById("yourSign").textContent = zodiac[i].sign;
				// get element with id="icon" and change source attribute to current zodiac image path
				document.getElementById("icon").src = zodiac[i].image;
				// get element with id="yourHoroscope" and change the content to this concatenated string
				document.getElementById("yourHoroscope").textContent = "Your best attributes are: "	+ zodiac[i].personality;

				// stop the function because we found a match and added the data to the screen!!!
				return;
			};
		};
		// confirm no matches are found if that's the case
		console.log("no matches were found, user failed to type in a correct year");

		// if no match is found, do opposite of above, mostly clearly content and images
		document.getElementById("yourSign").textContent = "Not one of the years. Try Again!";
		document.getElementById("yourHoroscope").textContent = "";
		document.getElementById("icon").src = "";
	};
};