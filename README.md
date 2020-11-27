# NobelAppBackendData
Get data on our nobel nomines

<h2> How to use </h2>

xhr request

Recieve | Request | Route | Response
--- | --- | --- | ---
All | GET | /allNobel | JSONArray nominies
Votes | GET | /votes | JSONArray vote
Vote | PUT | /vote | JSONArray vote update


<h3> JSON Layout </h3>

```json
{
	"firstname" : "Steve",
	"lastname" : "Jobs",
	"id" : 3,
	"accomplished" : [
		"what they accomplished in thier life",
		"some noteworthy stuff",
		"there can be many of these if you want it to"
	],
	"shortinfo":"short info about candidate for front page and intro text",
	"liv":"the story of their life - but only the interesting bits"
}
```

send a message if you want more functions
