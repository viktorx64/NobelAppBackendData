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
{
	"firstname" : "Steve",  //
	"lastname" : "Jobs",    //
	"id" : 3,               //id of the candidate from 0-7
	"accomplished" : [      //accomplishments an array you put what they have accomplished under their lives
		".",
		"..",
		"..."
	],
	"shortinfo":"",         //short info about candidate
	"liv":""                //candidates life story - (the interesting parts)
}

send a message if you want more functions
