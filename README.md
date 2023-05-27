# PUBG Bluezone Predictor

The PUBG Bluezone Predictor is a web application, optimized for PCs, that aids players in mastering zone prediction in PLAYERUNKNOWN'S BATTLEGROUNDS. 

Access the tool [here](https://kagijpn.github.io/pubg-bluezone-predictor/top/).

Google Chrome is the recommended browser for optimal performance. Please note that certain browser extensions such as AdBlock might hinder the tool's functionality.

If you're a first-time user, please make sure to read the instructions in the [Usage](#usage) section.

## Usage
The tool offers you the option to utilize pre-existing match data or generate your own practice match data.

- [Using pre-existing match data](#using-pre-existing-match-data)
- [Creating your own practice match data](#creating-your-own-practice-match-data)

### Using pre-existing match data
Several pre-existing match data sets are available in this tool.

You can find links named _〇〇.json_ on [this page](https://github.com/KagiJPN/pubg-bluezone-predictor/tree/master/blue-zone-predictor-core/app/resource).

Clicking on one of these links will display the match data further down the page, along with **Raw**, **Blame**, and **History** buttons.

Hover your cursor over **Raw**, right-click, and select "Save As" to save the file as _〇〇.json_.

Loading this JSON file on the [top page](https://kagijpn.github.io/pubg-bluezone-predictor/top/) will allow you to use the tool.

Refer to the [Zone Prediction Practice Tool Usage](#zone-prediction-practice-tool-usage) section for instructions on how to use the tool.

### Creating your own practice match data

This tool also lets you create your own match data.

The process involves three main steps:

1. Acquire an _API Key_ from the [PUBG Developer Portal](https://developer.pubg.com/). More details can be found [here](#api-key-generation-method).
2. Use the _API Key_, _Platform_, and _PUBG NAME_ on the [match search page](https://kagijpn.github.io/pubg-bluezone-predictor/players/) to display a list of matches you've played. Detailed instructions are provided [here](#instructions-for-the-match-search-page).
3. Copy the data displayed on the match list page and create a JSON file. Detailed instructions are provided [here](#instructions-for-the-match-list-page).

#### API Key Generation Method
You can obtain an API Key from the [PUBG Developer Portal](https://developer.pubg.com/).

Click on **GET YOUR OWN API KEY** and follow the instructions on the subsequent pages to sign up (free registration). 

Once completed, you'll be directed to a page that looks like the one shown below. Please copy the string labeled as **API KEY**.

![pubg-apikey](https://raw.githubusercontent.com/KagiJPN/pubg-bluezone-predictor/master/docs/resource/img/pubg-apikey.JPG)

### Tips
This tool allows registration of multiple API Keys. A single account on the [PUBG Developer Portal](https://developer.pubg.com/) can generate up to five API Keys. It is advisable to generate and register all five keys.

#### Instructions for the Match Search Page
Upon accessing the [match search page](https://kagijpn.github.io/pubg-bluezone-predictor/players/), you'll be greeted with a screen resembling the one below.

![search-page](https://raw.githubusercontent.com/KagiJPN/pub

g-bluezone-predictor/master/docs/resource/img/search-page.JPG)

- Paste the previously copied API Key into the "API KEY" field and click the **ADD** button on the right side.
- If the API Key is added successfully, it will be displayed as shown in the image.
- Input the desired Platform and PUBG NAME for the search and click the **SEARCH** button on the right side.

Upon clicking, you'll be redirected to the [match list page](#instructions-for-the-match-list-page).

#### Instructions for the Match List Page
After entering the necessary information on the match search page, you'll see a screen similar to the one below.

![matches-page](https://raw.githubusercontent.com/KagiJPN/pubg-bluezone-predictor/master/docs/resource/img/matches-page.JPG)

This page is where you can create your match data.

Click the **ADD** button on the right side of the match you wish to include. The match data will be appended to the text area on the right.

Once you've added all the matches you desire, click inside the text area. The data will be automatically copied.

Proceed with the following steps to format the match data:

- Open a text editor such as Notepad that allows text editing (preferably one that can format JSON).
- Begin by typing `[]`.
- After entering `[]`, paste the copied match data inside.
- Lastly, remove the final `,` (comma) from the pasted match data.
- When completed, save the file with a `.json` extension. Make sure the file name ends with `.json`.

The final file should follow this format:

```
[
    {"createdAt":"2/17 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/16 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/15 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/14 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/13 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/12 20:48" ~~~ "radius":126.09056640625}]}
]
```

##### Tips
Even though it is JSON data, you can merge multiple generated files into one. In that case, the format should be:

```
[
    {"createdAt":"1/17 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"1/16 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"1/15 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"1/14 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"1/13 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"1/12 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/17 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/16 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/15 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/14 20:48" ~~~ "radius":126.

09056640625

}]},
    {"createdAt":"2/13 20:48" ~~~ "radius":126.09056640625}]},
    {"createdAt":"2/12 20:48" ~~~ "radius":126.09056640625}]}
]
```

Please manually format the data as necessary to achieve this structure. Save and edit the file with a `.json` extension.

Refer to the instructions in the section [Zone Prediction Practice Tool Usage](#zone-prediction-practice-tool-usage) for using the tool.

## Zone Prediction Practice Tool Usage

1. To start, load the match data.

Click **LOAD** to select a file. Choose a JSON file that contains match data.

2. Select a match for zone prediction from the match list.

As depicted in the image below, the match list is displayed on the left side, and when you click on the green link, the map will be displayed on the right.

![pubg-predictor1](https://raw.githubusercontent.com/KagiJPN/pubg-bluezone-predictor/master/docs/resource/img/pubg-predictor1.JPG)

3. Practice zone prediction.

Click and drag the initially displayed red circle to move it. Position the red circle where you predict the next zone will be, then press the **Right Arrow (⇒)** or the **space key** on your keyboard.

The **Current** value on the screen shows the percentage of accurate predictions for the selected match. It compares the predicted zone with the actual zone.

The **Total** value displays the average percentage of accurate predictions for all matches.

Upon pressing the **Right Arrow (⇒)** or **space key**, the actual zone will appear as a white circle.

Once you reach the final phase, the red circle (predicted zone) will no longer appear. At this point, select the next match (green link).

![pubg-predictor2](https://raw.githubusercontent.com/KagiJPN/pubg-bluezone-predictor/master/docs/resource/img/pubg-predictor2.JPG)

### Tips
- You can switch to other matches even before reaching the final zone.
- Clicking on the **Date** or **Map** in the left list will sort them in ascending or descending order.

## Contributing
The instructions might seem a bit complicated. If you have any questions or need help, please contact me via [my Twitter](https://twitter.com/KagiJPN)!

I welcome suggestions and improvement proposals. No matter how small or trivial, please feel free to share your thoughts. I will consider and incorporate them to make the tool more effective and user-friendly. Your cooperation is greatly appreciated!
