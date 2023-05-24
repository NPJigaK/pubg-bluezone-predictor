pubg-bluezone-predictor
====

pubg-bluezone-predictor is a web application designed for practicing circle predictions in PLAYERUNKNOWN'S BATTLEGROUNDS (PUBG) on PC.

You can access the tool [here](https://kagijpn.github.io/pubg-bluezone-predictor/top/).

Recommended Environment
Google Chrome

Note: If you have any AdBlock extensions installed in your browser, it may interfere with the proper functioning of the tool.

If you are a first-time user, please read the following instructions on how to use the tool.

## How to Use

You have two options for using this tool: either utilizing the pre-prepared match data or creating your own practice match data.

- [Using Pre-prepared Match Data](#using-pre-prepared-match-data)
- [Creating Your Own Practice Match Data](#creating-your-own-practice-match-data)

### Using Pre-prepared Match Data

Several pre-prepared match data files are available for this tool.

You can visit [this page](https://github.com/KagiJPN/pubg-bluezone-predictor/tree/master/blue-zone-predictor-core/app/resource), where you will find links named "_〇〇.json_".

Clicking on one of those links will display the match data slightly below, along with buttons labeled **Raw**, **Blame**, and **History**.

Hover your cursor over **Raw**, right-click, choose "Save As," and save the file with the format "_〇〇.json_".

After saving the JSON file, you can load it on the [top page](https://kagijpn.github.io/pubg-bluezone-predictor/top/) to use the tool.

Please refer to the instructions for using the circle prediction practice tool [here](#instructions-for-using-the-circle-prediction-practice-tool).

### Creating Your Own Practice Match Data

In this tool, you have the option to create your own match data.

There are three main steps involved:

1. Obtain an API Key from the [PUBG Developer Portal](https://developer.pubg.com/). Details are provided [here](#obtaining-an-api-key).
2. On the [Match Search page](https://kagijpn.github.io/pubg-bluezone-predictor/players/), enter your API Key, Platform, and PUBG Name to display a list of matches you played. Details are provided [here](#using-the-match-search-page).
3. Copy the data displayed on the match list page and create a JSON file. Details are provided [here](#how-to-use-the-match-list-page).

#### Obtaining an API Key

To obtain an API Key, visit the [PUBG Developer Portal](https://developer.pubg.com/).

Click on **GET YOUR OWN API KEY** and follow the instructions to register for a free account (the website is in English, but the process is not too complicated).

Eventually, you will reach a page similar to the screenshot below. Copy the string of characters labeled **API KEY**.

![pubg-apikey](https://raw.githubusercontent.com/KagiJPN/pubg-bluezone-predictor/master/docs/resource/img/pubg-apikey.JPG)

### Tips

You can register multiple API Keys for this tool. With one account on the [PUBG Developer Portal](https://developer.pubg.com/), you can generate up to 5 API Keys. We recommend generating and registering 5 API Keys.

#### Using the Match Search Page

When you visit the [Match Search page](https://kagijpn.github.io/pubg-bluezone-predictor/players/), you will see a screen like the one below:

![search-page](https://raw.githubusercontent.com/K

agiJPN/pubg-bluezone-predictor/master/docs/resource/img/search-page.JPG)

- Paste the API Key you copied earlier into the "API KEY" field and click the **ADD** button on the right side.
- Once added successfully, the API Key you entered will be displayed, as shown in the image.
- Next, enter the Platform and PUBG Name for which you want to search, and click **SEARCH** on the right side.

You will be redirected to the [Match List page](#how-to-use-the-match-list-page) after clicking.

### How to Use the Match List Page

Once you have successfully navigated to the page with valid values, you will see a screen similar to the following:

![matches-page](https://raw.githubusercontent.com/KagiJPN/pubg-bluezone-predictor/master/docs/resource/img/matches-page.JPG)

This is where you can create the actual match data.

Click the **ADD** button on the right side of the matches you want to add. The match data will be appended to the text area on the right.


1. Open a text editor, such as Notepad or any editor that can format JSON.
2. Start by adding `[]` to create an empty array.
3. Paste the copied match data inside the `[]`.
4. Remove the last comma `,` from the pasted match data.
5. Save the file with a `.json` extension, ensuring it is properly formatted as shown below:

```json
[
    {"createdAt":"2/17 20:48" ~~~ "radius":126.09056640625},
    {"createdAt":"2/16 20:48" ~~~ "radius":126.09056640625},
    {"createdAt":"2/15 20:48" ~~~ "radius":126.09056640625},
    {"createdAt":"2/14 20:48" ~~~ "radius":126.09056640625},
    {"createdAt":"2/13 20:48" ~~~ "radius":126.09056640625},
    {"createdAt":"2/12 20:48" ~~~ "radius":126.09056640625}
]
```

Note: You can combine multiple sets of match data into a single file by appending them together.

### Using the Bluezone Predictor Tool

1. Click **LOAD** to select and load the JSON file containing the match data.
2. Choose a match from the match list on the left side.
3. The selected match's map will be displayed on the right side.
4. Practice predicting the next safe zone by clicking and dragging the red circle to the desired location.
5. Press the **⇒** arrow or the **space key** to compare your prediction with the actual safe zone.
6. The **Current** value displays the percentage of overlap between your prediction and the actual safe zone for the selected match.
7. The **Total** value shows the average overlap percentage for all matches.
8. After pressing the **⇒** arrow or the **space key**, the actual safe zone (displayed as a white circle) will be shown.
9. Repeat steps 4 to 8 for other matches by selecting them from the match list.

![pubg-predictor1](https://raw.githubusercontent.com/KagiJPN/pubg-bluezone-predictor/master/docs/resource/img/pubg-predictor1.JPG)

### Additional Tips

- You can switch to a different match without completing the prediction for the current match.
- Clicking the **Date** or **Map** headers in the match list allows you to sort the matches in ascending or descending order.

## Contact

If you have any questions or need assistance, feel free to reach out to me on [Twitter](https://twitter.com/KagiJPN). I welcome any feedback, suggestions, or bug reports that can help improve this tool.

You can also check the [Issues](https://github.com/KagiJPN/pubg-bluezone-predictor/issues) section to stay updated on future updates and fixes.

This tool is developed using pure technologies, without any external dependencies, and hosted on GitHub Pages.

I hope you find this tool useful for

 practicing your PUBG safe zone predictions!
