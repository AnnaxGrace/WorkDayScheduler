# WorkDayScheduler


Pseudo-Code: 

The html must take the users time and date from the computer. 

If the time has passed, the background is gray, if the time is now, the background is red, if the time is later it is green. So the background must be responsive to the time.

If you put an event down, if you click the save button it needs to save it to local storage. If you refresh and put a new event down, should it replace or add to the event? I think add, I think you should backspace out any event you don't want.

Real Code:

In HTMl:

I added the form elements and the form inputs. I also added multiple ids and classes for css and javascript.

In JS:

Used selectors added to the activities columns to add numerical values. Later used this against the real local time variable to determine background color.

Made value that took the real time and date, and then used moment formatting to create variable result with desired format.

Created variable hourString to hold the number of the hour in military time in a string. Then created variable hourNumber with parse to make the string a usable number.

Displayed the current date in the jumbotron

Created function timeColor, which holds the value number that I created of each of the rows in the activity column against the hour in military time. I made the values correspond to the time in military time. For example, if it is 1:00 formNumber is 13. Added pre-defined class of background colors depending if the number was less than, more than, or equal to the real time.

Ran that function for each of the sections.

Ran function renderLastRegistered, which gets from the local storage the value put in previously, and puts them in the form.

Created a click event for each save button that first checks to see if the value is empty. If it is, nothing happens. If it has a value, it puts that value into local storage.

In CSS:

I created two classes in css that stylized the forms.