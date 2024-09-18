<svelte:head>
	<link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import { page } from '$app/stores';
	import nyc from "$lib/images/nyc.png";
</script>

<div class="header1">
	<img class="nyc" src={nyc} alt="NYC logo" />
	<h1 class="copic" id="copic">
		Commission on Public Information and Communication
	</h1>
</div>
<header>
	<div class="header2">
		<nav id="test">
			<ul>
				<li>
					<a aria-current={$page.url.pathname === '/' ? 'pages' : 'other'} href="/">Home</a>
				</li>
				<div id="divider"></div>
				<li>
					<a aria-current={$page.url.pathname === '/members' ? 'pages' : 'other'} href="/members">Members</a>
				</li>
				<div id="divider"></div>
				<li>
					<a aria-current={$page.url.pathname === '/ourplan' ? 'pages' : 'other'} href="/ourplan">Our Plan</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		display: inline-block;
		position: sticky;
		top: 0;
	}

	.header1 {
		background-color: white;
		display: flex;
		padding: 5px;
		position: static;
		height: 30px;
	}

	.nyc {
		width: 102.4px;
		height: 33.7px;
		float: left;
		/* position: absolute;
		top: 4px;
		left: 5px; */
	}

	.copic {
		font-family: "Playfair Display", serif;
		/* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
		font-style: normal;
		font-weight: 700;
		font-size: 2em;
		color: inherit;
		text-rendering: optimizeLegibility;
		margin-top: 0px;
		margin-bottom: 0px;
		font-size: 1.5rem;
		color: black;
		margin: auto;
		/* text-align: center; */
		flex: 1 1 auto;
	}

	.header2 {
		background-color: white;
		box-shadow: 0 5px 5px gray;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: white;
		width: 100%;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 80%;
		margin-left: 5px;
		margin-right: 5px;
		font-family: "Open Sans", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
		display: flex;
	}

	li:hover {
		background-color: #E6E6E6;
		transition-duration: 0.3s;
	}

	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	nav a {
		display: flex;
		/* height: 100%; */
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.85rem;
		text-decoration: none;
		/* margin-top: 13px; */
	}

	#divider {
		border: 1px solid black;
		height: 25px;
		border-color: var(--color-text);
	}

	a[aria-current='pages'] {
		border-bottom-style: solid;
		border-color: var(--color-text);
	}

	/* a[aria-current='other']:hover::after {
		--size: 3px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		bottom: 2px;
		left: calc(50% - var(--size));
		border: var(--size) solid var(--color-text);
		border-radius: 3px;
	} */

	@media screen and (max-width: 700px) {
		.nyc {
			width: 66.56px;
			height: 21.91px;
		}

		.copic {
			font-size: 12.5px;
		}
	}
</style>
