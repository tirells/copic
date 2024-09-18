<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<link href="https://fonts.googleapis.com/css?family=Open Sans" rel="stylesheet">
</svelte:head>

<div class="banner">
	<h1 class="copic">COPIC</h1>
</div>

<section>
	<h1 class="about" id='about'>About COPIC</h1>
	<div class="divider"></div>
	 <div class="container">
		<img class="pa" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH1Y9V0Yo3pu27wivdQ7YIANZ3HQfYnPXYqA&s" alt="Jumaane Williams speaking"/>
		<div class="text">
			<p> The Commission on Public Information and Communication (COPIC) was created in 1989 to improve the public’s access to city information. COPIC’s mission is to educate the public about the availability and usefulness of information produced or maintained by the city, and to periodically review the city’s information policies and compliance with local laws related to the public’s access to information.<br><br>

				COPIC is also responsible for publishing an annual Data Directory of all the computerized information produced or maintained by the city that is required by law to be publicly accessible. The directory is intended to help the public understand what information is being compiled by city agencies and the purpose for which it is kept, and to instruct the public on how they can request access to such information. Unfortunately, due to budgetary constraints, COPIC has been unable to produce the annual Data Directory since 1993.<br><br>
				
				In 2012, the New York City Council enacted the first open data legislation in the nation. The intent of the city’s Open Data law is to make the information produced or maintained by the city available to the public to the greatest extent practicable. However, not all of the city’s information is subject to Open Data, and that is why the annual Data Directory continues to be an important tool for the public.<br><br>
				
				The acting Public Advocate will work with city agencies to publish the city’s first annual Data Directory in 25 years.
			</p>
		</div>
	</div>
	<h1 class="about2">About the Commission</h1>
	<div class="divider2"></div>
	<div class="container">
		<div class="text">
			<p> 
				The New York City Charter establishes a Commission on Public Information and Communication (COPIC) [<b><a href="/nyccharter">Read New York City Charter §1061</a></b>]. COPIC's mission is to help make city government more transparent to the citizens it serves and to encourage the public to become more actively involved in government.<br><br>

				Although COPIC has never been properly funded since its creation in 1989, it has had some important accomplishments. The Commission was instrumental in the creation of CROSSWALKS in 1990, which later became NYCTV. In 1993, it published a Public Data Directory of computerized information produced or maintained by City agencies, through the help of private funding. Finally, in 1998, COPIC was last convened under Mark Green and it produced a guide to the NYS FOIL and Open Meetings Law, through Public Advocate funds.<br><br>

				Under Public Advocate Betsy Gotbaum, and with the help of the present administration, COPIC began reconvening once again in 2017 and is still active today.<br><br>

				The Commission is comprised of the <b><a href="/members">Public Advocate</a></b> (Chair); the <b><a href="/members#jdw">Corporation Counsel</a></b>; the Director of the <b><a href="/members#jdw">Mayor's Office of Operations</a></b>; the Commissioner of the <b><a href="/members#cf">Department of Records and Information Services</a></b> (DORIS); the Commissioner of the <b>Department of Information Technology and Telecommunications</b> (DOITT); the <b><a href="/members#wp">president of WNYC</a></b> communications group of their delegates; and one <b><a href="/members#cf">Council Member</a></b> elected by the Council. Additionally, four members are to be appointed - two by <b>the Mayor</b> (one representing the media and the other a member of a community board), one by the Public Advocate, and one by <b><a href="/members#jg">the Borough Presidents</a></b> acting collectively.<br><br>

				Among other purposes, COPIC was conceived to educate the public about the location and usefulness of city produced and maintained information. The Commission was intended to make recommendations on new technology and the use of such technology to better inform the public. Further, it was tasked to review city information and meeting policies and provide advisory opinions on Freedom of Information Law (FOIL) matters.<br><br>

				Moreover, the Commission is charged with making recommendations on new technology to improve access to the city's information, including city cable offerings, and publishing a data access directory. With innovations such as 311, internet content, and web casts the city has made substantial progress in information delivery in the past decade. Given the rapid advancements in new technology, having a body such as COPIC reviewing and recommending its proper usages is instrumental to the city's operations.<br><br>

				One of the responsibilities of the Commission is to make recommendations about distributing "information to the public about the purposes and locations of the city's service delivery facilities." (<b><a href="/nyccharter#d6">NYC Charter §1061 (d) (6) (ii)</a></b>). While the city clearly offers many excellent services, providing information to the public about where to go and who can help to access those services are critical to their success.<br><br>

				COPIC meetings are a unique opportunity for government officials to discuss with media and community representatives issues important to residents. Such meetings present a forum for officials to share information about their respective roles and operations and to work collectively to improve upon ideas and projects.<br><br>

				<b>Get the meeting schedule</b>.
			</p>
		</div>
	</div>
</section>

<style>
	.banner {
		display: flex;
		flex-direction: row;
		align-items: center;
		/* align-self: center; */
		justify-content: center;
		background-image: url("$lib/images/nyc2.jpg");
		background-size: cover;
		width: 100%;
		height: 300px;
	}

	.copic {
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 3.5rem;
		font-weight: 600;
		color: white;
	}

	section {
		flex: 0.6;
		max-width: 1200px;
		margin: 0 auto;
	}

	.pa {
		margin-right: 10px;
		float: left;
		border-radius: 10px;
	}

	.about {
		font-size: 2rem;
		margin-bottom: 5px;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-weight: 650;
	}

	.about2 {
		font-size: 2rem;
		margin-bottom: 5px;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-weight: 650;
	}

	.divider {
		border: 1px solid black;
		margin: auto;
		width: 15rem;
	}

	.container {
		margin-bottom: 50px;
	}

	p {
		font-family: "Open Sans", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
	}

	.divider2 {
		border: 1px solid black;
		margin: auto;
		width: 23rem;
	}

	a {
		color: inherit;
	}

	@media screen and (max-width: 700px) {
		.pa {
			float: none;
			margin-top: 10px;
		}

		.container {
			/* border: 1px solid black; */
			text-align: center;
		}

		p {
			margin-left: 5px;
			margin-right: 5px;
		}
	}

</style>
