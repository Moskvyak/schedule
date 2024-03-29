## Question 2

For this question we want you to fetch data from a couple of endpoints on the server.  This data will describe the events of some people’s day (specifically 01/09/2018).  We’d like you to take that data, merge it together and display it in some form of timeline.

We don’t need any input fields, toggle states or transitions on the page.  You can start fetching as soon as the page has loaded and display once the data has been received.

On the server you’ll find an endpoint called ‘/resources’ which has data on a couple of people.  These people were assigned a few Jobs and Activities (‘/jobs’ and ‘/activities’ endpoints respectively) during the day.  Each person's assignment for the day can be found via the ‘/jobAllocations’ and ‘/activityAllocations’ endpoints.  You should note that each job and activity may be assigned to multiple people.

Once you have that data we’d like you to display in some way to illustrate “this is how the day went for these people”.  We have provided a Swimlane component to do that for you (under the /src/components/Swimlane folder).  But if you have a different way (and want to earn some bonus points) then show us what you’ve got.

If you do use the Swimlane component please update its display so cards representing a Job will have a green border, while cards representing an Activity have a purple border.


Note: While it would be better to have the server expose an endpoint that provides all this data in a nice format, we want to see what you do when given data from a couple of different sources.

Note: We have provided a `service` prop to the component that is defined in /src/service/DataService.js.  It has access to a graphql client and a http request library.  If you wish to fetch data from the server we suggest you do it from there.
