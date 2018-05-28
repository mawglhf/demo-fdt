/**
 * Necessary For One Character Demo
 *
 *        ISSUES WHEN ADDING MOST POPULAR:
 * TODO: Alisa d/f+4 missing
 * TODO: Bob f, F+1+2 throw
 * TODO: Bryan d/f+1, 1, 1, 1, 2
 *
 *        CLEANING UP THE CODE
 * TODO: Refactor obviously hackey MostMissedCards component - DRY
 * TODO: Refactor RenderMissedCards logic to it's own component - too messy in RoundHistory
 * TODO: Add a CSS style sheet to centralize all the multiple 'styles={{ marginTop: 5 }}' etc
 *
 *        VISUALS
 * TODO: RoundHistory - Need a LineGraph to separate User Overall Stats from Rounds Played History
 *
 *        FINAL STEP (kinda)
 * TODO: Deploy using Heroku
 */

/**
 * Necessary for All Characters WITHOUT GIFS
 * TODO: Add Most Popular tags to each character in t7Data.json
 * TODO: filterMoves.js - Completely fill out the allStanceNames array
 */

/**
 * Eventually to make it actually not trash
 * TODO: Add Google Analytics
 * TODO: Cookie Store, similar to this https://github.com/fdsimms/linguana#cookie-store
 * TODO: Error Handling
 * TODO: Links to share Scores or Stats outside of the app
 *
 * TODO: Character Select Screen with Thumbnails
 * TODO: Refactor to use Redux
 * TODO: Rewrite in ReactNative
 */

/**
 * Completed Tasks
 * DONE: Add button onto ScoreView to send Round Data Object to LocalStorage
 * DONE: Finish setting up setStatePostRoundData and how the Score components use it as props!
 * DONE: Check to see if an updated version of the t7data exists that includes Noctis
 * DONE: Create Skeleton for UserStats(RoundHistory) Page and connect to localStorage
 * DONE: Finish Current Required Features and Init Repository on Github
 * DONE: Incorporate React-Router for Navigation
 * DONE: Separate Home from InitialView => Jumbotron with RoundTypeBar and Portrait of Character
 * DONE: Implement Dropdowns without Selection Functionality
 * TODO: Create a constants directory or file for storing allCharNames, allFilterNames, etc.
 * TODO: RoundHistory - Most Recent Score and Average Score need circle percent visualizations
 *
 *
 * Necessary for Release / Incorporating the Rest of the Characters WITHOUT Images
 * DONE: Debug createAllCardsList.js in Utils
 * DONE: Hook createAllCardsList up to Trainer
 * DONE: Setup Trainer to USE Props of Character, Filter, Property
 * DONE: Place State for Character, Filter, Property, (user) under App.js State
 * DONE: Implement and Debug filterMethods.js from cra-fdt
 * DONE: Easily move the FrameData Screen from cra-fdt into demo
 * DONE: Refactor StoreDataButton to store rounds based on Char/Filt/Prop
 * DONE: Refactor User Stats page to show the information based on Char/Filt/Prop
 *
 *      MOBILE FIRST DESIGN
 * DONE: InitialView - Keep Tabs all in one line
 * DONE: RoundView - Buttons to resize when on mobile
 * DONE: - FDT Link NavBar should work during a round
 * DONE: - Add Character Name
 * DONE: - Remove Margin at top of Jumbotron
 * DONE: ScoreTable - Remove Page Tabs and Rows Selection
 * DONE: ScoreView - Add Move # as a column
 * DONE: - Store Round Data should only be Pressable Once
 * DONE: - Play Again Button should work
 * DONE: RoundHistory - Format Top 5 Missed Moves
 * DONE: - Add Correct Answer to Missed Moves list
 * DONE: - Rename Section from Rounds Played History
 * DONE: RoundView - CardImage needs to resize based on mobile vertical/horizontal
 */
