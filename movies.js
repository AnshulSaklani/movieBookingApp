let movies = [
	{
		name: "Rocky Aur Rani Kii Prem Kahaani", image: "https://upload.wikimedia.org/wikipedia/en/6/65/Rocky_Aur_Rani_Ki_Prem_Kahani.jpg", rating: 7.1, votes: 8645,
		format: ["2D"], genre: ["Comedy", "Family", "Romantic"], languages: ["Hindi"], release: "28 July, 2023", cast: ["Ranveer Singh", "Alia Bhatt", "Dharmendra", "Jaya Bachchan"],
		about: "Rocky Aur Rani Kii Prem Kahaani magnifies the power of love, embraces the complexities of relationships, and celebrates the beauty of both perfect and imperfect families."
	},
	{
		name: "Oppenheimer", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg", rating: 8.8, votes: 164596,
		format: ["2D", "IMAX 2D", "3D"], genre: ["Biography", "Drama", "History"], languages: ["English", "Hindi"], release: "21 July, 2023", cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
		about: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb."
	},
	{
		name: "Barbie", image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg", rating: 7.5, votes: 101859,
		format: ["2D", "IMAX 2D"], genre: ["Adventure", "Comedy", "Fantasy"], languages: ["English", "Hindi"], release: "21 July, 2023", cast: ["Margot Robbie", "Ryan Gosling", "Issa Rae", "Kate McKinnon"],
		about: "Barbie suffers a crisis that leads her to question her world and her existence."
	},
	{
		name: "Mission: Impossible - Dead Reckoning Part One", image: "https://upload.wikimedia.org/wikipedia/en/e/ed/Mission-_Impossible_%E2%80%93_Dead_Reckoning_Part_One_poster.jpg", rating: 8.0, votes: 92984,
		format: ["2D", "IMAX 2D", "3D"], genre: ["Adventure", "Action", "Thriller"], languages: ["English", "Hindi"], release: "12 July, 2023", cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames", "Simon Pegg"],
		about: "Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands."
	},
	{
		name: "Ajmer 92", image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Ajmer_92.jpg/220px-Ajmer_92.jpg", rating: 7.7, votes: 2245,
		format: ["2D"], genre: ["Crime", "Drama", "Historical"], languages: ["Hindi"], release: "21 July, 2023", cast: ["Karan Verma", "Sayaji Shinde", "Manoj Joshi"],
		about: "The gripping story encapsulates the suicides of several minor girls who were raped, leading to widespread panic and hysteria. It also depicts how the grief-stricken girls are blackmailed by powerful men."
	},
	{
		name: "Tufang", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Tufang_movie_official_poster.jpg/220px-Tufang_movie_official_poster.jpg", rating: 8.2, votes: 3146,
		format: ["2D"], genre: ["Action", "Drama", "Thriller"], languages: ["Punjabi"], release: "21 July, 2023", cast: ["Guri", "Mahabir Bhullar"],
		about: "Veera shoplifts a gun from a respected gun house, unaware that Arjan, the shop`s heir, will track her down. She offers to teach him to shoot and pay for the gun, but Arjan unexpectedly falls for her. Veera challenges Arjan`s morals and ethics, causing a twist in their relationship."
	},
	{
		name: "Insidious: The Red Door", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Insidious_the_red_door.png/220px-Insidious_the_red_door.png", rating: 6.0, votes: 14503,
		format: ["2D"], genre: ["Horror", "Mystery", "Thriller"], languages: ["English", "Telugu", "Tamil", "Kannada", "Hindi"], release: "6 July, 2023", cast: ["Jim Caviezel", "Mira Sorvino", "Bill Camp", "Cristal Aparicio"],
		about: "The Lamberts must go deeper into The Further than ever before to put their demons to rest once and for all."
	},
	{
		name: "Sound of Freedom", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/The_Sound_of_Freedom_Poster.jpg/220px-The_Sound_of_Freedom_Poster.jpg", rating: 7.9, votes: 35659,
		format: ["2D", "IMAX 2D"], genre: ["Biography", "Action", "Drama"], languages: ["English", "Hindi"], release: "4 July, 2023", cast: ["Ty Simpkins", "Patrick Wilson", "Rose Byrne", "Sinclair Daniel"],
		about: "The incredible true story of a former government agent turned vigilante who embarks on a dangerous mission to rescue hundreds of children from sex traffickers."
	},
	{
		name: "Indiana Jones and the Dial of Destiny", image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Indiana_Jones_and_the_Dial_of_Destiny_theatrical_poster.jpg/220px-Indiana_Jones_and_the_Dial_of_Destiny_theatrical_poster.jpg", rating: 6.8, votes: 83503,
		format: ["2D", "IMAX 2D", "3D"], genre: ["Action", "Adventure"], languages: ["English", "Hindi"], release: "30 June, 2023", cast: ["Harrison Ford", "Phoebe Waller-Bridge", "Antonio Banderas", "Karen Allen"],
		about: "Archaeologist Indiana Jones races against time to retrieve a legendary artifact that can change the course of history."
	},
	{
		name: "Satyaprem Ki Katha", image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Agent_%28film%29.jpg/220px-Agent_%28film%29.jpg", rating: 7.0, votes: 6500,
		format: ["2D"], genre: ["Drama", "Musical", "Romantic"], languages: ["Hindi"], release: "29 June, 2023", cast: ["Kartik Aaryan", "Kiara Advani"],
		about: "A young dreamer Satyaprem gets married to the woman he loves, Katha, but she`s holding on to a secret that`s not easy to let go of. What will happen when Sattu uncovers the truth?"
	},
	{
		name: "Carry On Jatta 3", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Carry_on_Jatta_3_film_poster.jpg/220px-Carry_on_Jatta_3_film_poster.jpg", rating: 7.0, votes: 6400,
		format: ["2D"], genre: ["Comedy", "Romantic"], languages: ["Punjabi"], release: "29 June, 2023", cast: ["Gippy Grewal", "Sonam Bajwa"],
		about: "Advocate Dhillon`s son, Jass, is in love with Meet but her brothers get in a tussle with Adv. Dhillon. As a result, Adv. Dhillon rejects Meet`s hand in marriage. Left with no option, Jass weaves a madhouse plan to propose to his friend, Goldy`s wife, Diljit. Will the plan work?"
	},
	{
		name: "Elemental", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Elemental_final_poster.jpg/220px-Elemental_final_poster.jpg", rating: 8.8, votes: 2805,
		format: ["2D", "3D", "4DX"], genre: ["Animation", "Comedy", "Adventure"], languages: ["English", "Hindi"], release: "23 June, 2023", cast: ["Leah Lewis", "Mamoudou Athie", "Ronnie Del Carmen", "Shila Ommi"],
		about: "Follows Ember and Wade, in a city where fire-, water-, land- and air-residents live together."
	},
	{
		name: "1920: Horrors of the Heart", image: "https://upload.wikimedia.org/wikipedia/en/2/29/1920_-_Horrors_of_the_Heart.jpg", rating: 3.6, votes: 3309,
		format: ["2D"], genre: ["Horror", "Drama"], languages: ["Hindi"], release: "23 June, 2023", cast: ["Avika Gor", "Rahul Dev", "Barkha Bisht"],
		about: "A young girl walks into a world of darkness is search of revenge but darkness consumes her making her a victim of that very revenge."
	},
	{
		name: "The Flash", image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg", rating: 7.0, votes: 116983,
		format: ["2D", "IMAX 2D", "3D"], genre: ["Action", "Adventure", "Fantasy"], languages: ["English", "Hindi"], release: "16 June, 2023", cast: ["Ezra Miller", "Michael Keaton", "Sasha Calle", "Michael Shannon"],
		about: "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future."
	},
	{
		name: "Adipurush", image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Adipurush_poster.jpeg/220px-Adipurush_poster.jpeg", rating: 3.1, votes: 107857,
		format: ["2D", "3D"], genre: ["Action", "Adventure", "Drama"], languages: ["Hindi", "Telugu", "Malayalam", "Tamil", "Kannada"], release: "16 June, 2023", cast: ["Kriti Sanon", "Saif Ali Khan", "Prabhas", "Devdutta Nage"],
		about: "A modern adaptation of the Indian epic Ramayana which follows the exiled prince Raghav's journey to rescue his wife Janaki from the demon king Lankesh."
	},
	{
		name: "Transformers: Rise of the Beasts", image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Transformers-_Rise_of_the_Beasts.jpg/220px-Transformers-_Rise_of_the_Beasts.jpg", rating: 6.2, votes: 56412,
		format: ["2D", "IMAX 2D", "3D"], genre: ["Action", "Adventure", "Sci-Fi"], languages: ["English", "Hindi"], release: "9 June, 2023", cast: ["Anthony Ramos", "Dominique Fishback", "Luna Lauren Velez", "Dean Scott Vazquez"],
		about: "During the '90s, a new faction of Transformers - the Maximals - join the Autobots as allies in the battle for Earth."
	},
	{
		name: "Spider-Man: Across the Spider-Verse", image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg/220px-Spider-Man-_Across_the_Spider-Verse_poster.jpg", rating: 8.9, votes: 192017,
		format: ["2D", "IMAX 2D"], genre: ["Animation", "Action", "Adventure"], languages: ["English", "Hindi"], release: "2 June, 2023", cast: ["Shameik Moore", "Hailee Steinfeld", "Brian Tyree Henry", "Luna Lauren Velez"],
		about: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero."
	},
	{
		name: "2018", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/2018movie.jpg/220px-2018movie.jpg", rating: 9.3, votes: 1023,
		format: ["2D"], genre: ["Drama", "Thriller"], languages: ["Malayalam","Telugu", "Tamil", "Hindi"], release: "26 May, 2023", cast: ["Tovino Thomas", "Kunchacko Boban"],
		about: "A thriller set in the backdrop of 2018 Kerala Floods. It unfolds the lives of people from all walks of life who faced catastrophic consequences and the collective efforts put in by the brave people to survive the calamity."
	},
	{
		name: "The Little Mermaid", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/The_Little_Mermaid_%282023_film%29.png/220px-The_Little_Mermaid_%282023_film%29.png", rating: 7.3, votes: 3687,
		format: ["2D", "3D", "IMAX 3D", "MX4D 3D", "4DX 3D"], genre: ["Adventure", "Family", "Fantasy"], languages: ["English", "Hindi"], release: "26 May, 2023", cast: ["Halle Bailey", "Jonah Hauer-King", "Melissa McCarthy", "Javier Bardem"],
		about: "A young mermaid makes a deal with a sea witch to trade her beautiful voice for human legs so she can discover the world above water and impress a prince."
	},
	{
		name: "Fast X", image: "https://upload.wikimedia.org/wikipedia/en/f/f2/Fast_X_poster.jpg", rating: 5.9, votes: 81479,
		format: ["2D", "3D", "IMAX 3D"], genre: ["Action", "Adventure", "Crime"], languages: ["English", "Hindi"], release: "19 May, 2023", cast: ["Vin Diesel", "Michelle Rodriguez", "Jason Statham", "Jordana Brewster"],
		about: "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes."
	},
	{
		name: "Guardians of the Galaxy Vol. 3", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Guardians_of_the_Galaxy_Vol._3_poster.jpg/220px-Guardians_of_the_Galaxy_Vol._3_poster.jpg", rating: 8.1, votes: 230385,
		format: ["2D", "IMAX 2D", "3D"], genre: ["Action", "Adventure", "Comedy"], languages: ["English", "Hindi"], release: "5 May, 2023", cast: ["Chris Pratt", "Chukwudi Iwuji", "Bradley Cooper", "Pom Klementieff"],
		about: "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful."
	},
	{
		name: "Ponniyin Selvan: Part Two", image: "https://upload.wikimedia.org/wikipedia/en/5/5e/Ponniyin_Selvan_II.jpg", rating: 7.4, votes: 15611,
		format: ["2D", "IMAX 2D", "4DX"], genre: ["Action", "Adventure", "Drama"], languages: ["Tamil", "Hindi", "Telugu", "Kannada", "Malayalam"], release: "28 April, 2023", cast: ["Vikram", "Karthi", "Jayam Ravi", "Aishwarya Rai Bachchan"],
		about: "Arulmozhi Varman continues on his journey to become Rajaraja I, the greatest ruler of the historic Chola empire of south India."
	},
	{
		name: "Agent", image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Agent_%28film%29.jpg/220px-Agent_%28film%29.jpg", rating: 5.6, votes: 2030,
		format: ["2D"], genre: ["Action", "Mystery", "Thriller"], languages: ["Telugu", "Malayalam"], release: "28 April, 2023", cast: ["Akhil Akkineni", "Mammootty", "Sakshi Vaidya", "Dino Morea"],
		about: "A spy with a mysterious past is on a mission to uncover the truth about a dangerous terrorist organization."
	},
	{
		name: "Neelavelicham", image: "https://upload.wikimedia.org/wikipedia/en/5/57/Neelavelicham_poster.jpg", rating: 6.1, votes: 1146,
		format: ["2D"], genre: ["Horror", "Thriller"], languages: ["Malayalam"], release: "20 April, 2023", cast: ["Tovino Thomas", "Shine Tom Chacko", "Roshan Mathew", "Rima Kallingal"],
		about: "A young, enthusiastic and free-spirited writer arrives to stay in a desolate mansion, rumored to be haunted by the apparition of a young woman who committed suicide when she was betrayed in love."
	},
	{
		name: "The Super Mario Bros. Movie", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/The_Super_Mario_Bros._Movie_poster.jpg/220px-The_Super_Mario_Bros._Movie_poster.jpg", rating: 7.1, votes: 6571,
		format: ["2D", "3D", "4DX"], genre: ["Animation", "Comedy", "Adventure"], languages: ["English", "Hindi"], release: "5 April, 2023", cast: ["Chris Pratt", "Anya Taylor-Joy", "Charlie Day", "Jack Black"],
		about: "A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess."
	},
]

let movieHalls = [
	{
		name: "PVR Cinemas", 
		slots: [
		 {time: "09:30 AM", booking: [{amount: 200.00, type: "Classic"},{amount: 300.00, type: "Prime"},{amount: 500.00, type: "Recliners"}], ticketsBooked: ["O1", "O2", "O5","O6","N5", "N6", "N9", "N16", "M5","M8", "M19", "L8", "K18","K14", "K3", "K7", "J2", "J6", "J5", "J20", "H17", "G3", "G5", "G6","G7","G8", "G23", "G24", "D14", "D15", "D16", "D18", "D19","B1","B2","B3","B4","B8","B15","B16","B18","B19","B20","A1","A2","A10","A11","A12","A15"]},
		 {time: "12:30 PM", booking: [{amount: 200.00, type: "Classic"},{amount: 300.00, type: "Prime"}], ticketsBooked: ["N5", "N6", "N9","N10", "N11","N12","N13", "N19", "M5","M8", "M19", "M20", "L5", "L9", "L10","L11","L12", "K18","K14", "K3", "K21", "J2", "J6", "J5", "J20", "H17", "G3", "G5", "G6","G7","G8", "G23", "G24","E1","E21","E22","E23","E24", "D12","D13","D14", "D15", "D16", "D18", "D19","B1","B2","B13","B14","B9","B18","B19","B20","A1","A12","A9","A19","A21","A22"]},
		 {time: "06:30 PM", booking: [{amount: 200.00, type: "Classic"},{amount: 300.00, type: "Prime"}], ticketsBooked: ["N7", "N11","N12","N13", "N19", "M5","M8","L5", "L9", "L10","L11","L12", "K18","K14", "K3", "K21", "J2", "J6", "J5", "J20", "H17", "G3", "G5", "G6","G7","G8", "G23", "G24","E1","E21","E22","E23","E24", "D12","D13","D14", "D15", "D16", "D18", "D19","C1","C2","C4","C9","C21","C22","B1","B2","B13","B14","B9","B18","B19","B20"]}
		]
	},
	{
		name: "INOX Cinemas", slots: [
			{time: "09:30 AM", booking: [{amount: 200.00, type: "Classic"},{amount: 300.00, type: "Prime"},{amount: 500.00, type: "Recliners"}], ticketsBooked: ["O1", "O2", "O3","O4","N5", "N6", "N9", "N12", "M5","M8", "M13", "M14", "M15", "M19", "L8", "K18","K14", "K3", "K7", "I2", "I6", "I5", "I20", "H17", "G3", "G5", "G6","G7","G8", "G23", "E4", "D14", "D15", "D16", "C18", "C19","B1","B2","B3","B5","B6","B8","B9","B21","A21","A5"]},
			{time: "06:30 PM", booking: [{amount: 200.00, type: "Classic"},{amount: 300.00, type: "Prime"}], ticketsBooked: ["N7", "N11","N12","N13", "N19", "N20","N21","N22","N23","N24", "M5","M8", "M12","M13", "M14", "L5", "L9", "L10","L11","L12", "K18","K14", "K3", "K21", "J2", "J6", "J5", "J20", "H17", "G3", "G5", "G6","G7","G8", "G23", "G24","F2","F3","F4", "F5", "F16", "F18", "F19","E1","E21","E22","E23","E24","C1","C2","C4","C9","C21","C22","B1","B2","B13","B14","B9","B18","B19","B20"]}
		]
	},
	{
		name: "Cinepolis", slots: [
			{time: "09:30 AM", booking: [{amount: 200.00, type: "Classic"},{amount: 300.00, type: "Prime"}],ticketsBooked: ["N5", "N6", "N9","N10", "N11","N12","N13", "N19", "M5","M8", "M19", "M20", "L5", "L9", "L10","L11","L12", "K18","K14", "K3", "K21", "J2", "J6", "J5", "J20", "H17", "G3", "G5", "G6","G7","G8", "G23", "G24","E1","E21","E22","E23","E24", "D12","D13","D14", "D15", "D16", "D18", "D19","B1","B2","B13","B14","B9","B18","B19","B20","A1","A12","A9","A19","A21","A22"]},
			{time: "11:30 AM", booking: [{amount: 300.00, type: "Classic"},{amount: 500.00, type: "Recliners"}],ticketsBooked: ["O5", "O6", "O9","O10", "O11","O12","O13", "L5", "L9", "L10","L11","L12", "K18","K14", "K3", "K21", "J2", "J6", "J5", "J20", "H17", "G3", "G5", "G6","G7","G8", "G23", "G24","E1","E21","E22","E23","E24", "D12","D13","D14", "D15", "D16", "D18", "D19","B1","B2","B13","B14","B9","B18","B19","B20","A1","A12","A9","A19","A21","A22"]},
			{time: "02:00 PM", booking: [{amount: 200.00, type: "Classic"},{amount: 300.00, type: "Prime"}],ticketsBooked: ["N14", "N16", "N19","N20", "N21","N22","N23", "M6","M7", "M8", "M9","K8","K14", "K15", "K16", "J12", "J16", "J17", "J20","G3", "G5", "G6","G7","G8", "G23", "G24","E1","E2","E22","D1","D13","D14", "D15", "D16", "D18", "D19","B1","B2","B13","B14","B9","B18","B19","B20","A1","A12","A9","A19","A21","A22"]},
			{time: "05:00 PM", booking: [{amount: 200.00, type: "Classic"},{amount: 300.00, type: "Prime"}, {amount: 500.00, type: "Recliners"}],ticketsBooked: ["N5", "N6", "N9","N10", "N11","N12","N13", "N19", "M5","M8", "M19", "M20", "L5", "L9", "L10","L11","L12", "K18","K14", "K3", "K21", "J2", "J6", "J5", "J20", "H17", "G3", "G5", "G6","G7","G8", "G23", "G24","E1","E21","E22","E23","E24", "D12","D13","D14", "D15", "D16", "D18", "D19","B1","B2","B13","B14","B9","B18","B19","B20","A1","A12","A9","A19","A21","A22"]},
			{time: "07:00 PM", booking: [{amount: 200.00, type: "Classic"},{amount: 300.00, type: "Prime"},{amount: 500.00, type: "Recliners"}],ticketsBooked: ["N5", "N6", "N9", "N16", "M5","M8", "M19", "L8", "K18","K14", "K3", "K7", "J2", "J6", "J5", "J20", "H19","H20","H21","H22","H23","H24", "G3", "G5", "G6","G7","G8", "E23", "E24","D10","D11","D12","D13", "D14", "D15", "D16", "D18", "D19","B1","B2","B3","B4","B8","B15","B16","A1","A2","A10","A11","A12","A15"]},
			{time: "09:00 PM", booking: [{amount: 200.00, type: "Classic"},{amount: 300.00, type: "Prime"}],ticketsBooked: ["N9", "N14", "N17","N22","M5", "L5", "L9", "L10","L11","L12", "K18","K14", "K23", "K24", "J2", "J6", "J5", "J20","G6","G7","G8", "G23", "G24","E1","E21","E22","E23","E24", "D12","D13","D14", "D15", "D16", "D18", "D19","B1","B2","B13","B14","B9","B18","B19","B20","A1","A12","A9","A19","A21","A22"]},
		] 
	},
	{
		name: "SPI Cinemas", slots: [
			{time: "09:30 AM", booking: [{amount: 200.00, type: "Classic"},{amount: 300.00, type: "Prime"}], ticketsBooked: ["N1","N2","N3", "M5","M8", "M12","M13", "M4", "L5", "L9", "L10","L11","L12", "K18","K14", "K3", "K21", "J2", "J6", "J5", "J20", "H17", "G3", "G5", "G24","F2","F3","F4", "F5", "F16", "F18", "F19","E1","E21","E22","E23","E24","C1","C2","C4","C9","B20"]},
			{time: "12:00 PM", booking: [{amount: 300.00, type: "Classic"},{amount: 500.00, type: "Recliners"}], ticketsBooked: ["02","O3","O24", "L5", "L11","L12","L13", "K18","K14", "K3", "K21", "J2", "J6", "J5", "J20", "H3", "H5", "H6","H17","H18", "H23", "H24","F2","F3","F4", "F13", "F16", "F18", "F19","F20","F21","F22","E1","E21","E22","E23","E24","C1","C2","C4","C9","C21","C22","B1","B2","B13","B14","B9","B18","B19","B20", "A2","A3","A4","A8","A9","A10","A11","A12","A13","A18","A19"]},
			{time: "03:00 PM", booking: [{amount: 200.00, type: "Classic"},{amount: 300.00, type: "Prime"}, {amount: 500.00, type: "Recliners"}], ticketsBooked: ["O1", "O12", "O15","N5", "N6", "N9", "N16", "M15","M16", "M17", "L8", "K18","K14", "K3", "K7", "J2", "J6", "J5", "J20", "H8","H9","H10", "G3", "G5", "G6","G7","G8", "G23", "G24", "F14", "F15", "E16", "D8", "D9","B1","B2","B3","B4","B8","B15","B16","B18","B19","B20","A1","A2","A10","A11","A12","A15"]},
			{time: "09:00 PM", booking: [{amount: 200.00, type: "Classic"},{amount: 300.00, type: "Prime"}, {amount: 500.00, type: "Recliners"}], ticketsBooked: ["O3","O6","O7", "O9","O11","O16","N5", "N6", "N9", "N16", "M5","M8", "L8", "K18","K14", "K3", "K7", "J2", "J6", "J5", "J20", "H17", "H23", "H24", "D14", "D15", "D16", "D18", "D19","C1","C2","C5","C16","C18","C20","B20","A1","A2","A10","A21","A22","A24"]},
		] 
	},
	{
		name: "Mirag Cinemas", slots: [
			{time: "09:30 AM", booking: [{amount: 200.00, type: "Classic"},{amount: 300.00, type: "Prime"}], ticketsBooked: ["N20","N21","N22","N23","N24", "M5","M23", "M14", "L5", "L9", "L10","L11","L12", "K19", "J2", "J6", "H5", "H2", "H7", "G3", "G5", "G6", "G23", "G24","F12","F13","F14", "F15", "F16", "F18", "F19","D1","D2","D4","C9","C21","C22","A1","A2","A13","A14","A9","A18","A19","A20"]},
			{time: "06:30 PM", booking: [{amount: 200.00, type: "Classic"},{amount: 300.00, type: "Prime"}], ticketsBooked: ["N7", "N11","N12","N13", "N19", "N20","N21","N2","N3","N4", "M16","M8", "M12","M13", "M14", "L5", "L9", "L10","L11","L12", "K18","K14", "K3", "K21", "J2", "J6", "J5", "J20", "H17", "G13", "G24", "G6","G7","G8", "G23", "G24","F2","F3","F4", "F5", "F22", "F23", "F19","E1","E21","E22","E23","E24","C1","C2","C4","C9","C21","C22","B1","B2","B3","B4","B8","B19","B20"]}
		] 
	},
]

let users = [
	{id: 1, name: "James", mail: "test@test.com", password: "test123", mobNumber: "", booking: []},
	{id: 2, name: "Alex", mail: "user@user.com", password: "user123", mobNumber: "", booking: []}
]

module.exports = { movies, movieHalls, users };