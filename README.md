# Tweets Dataset

Generated and edited with ChatGPT 4.0.

Original Prompt:

```
Generate 200 Tweets based on quotes about: success, personal growth, philosophy, software engineering humor, and video game humor.
```

Optimized Prompt:

```
Let's continue on our goal of growing our Twitter following. Current follower count: <count>.
Generate 20 Tweets based on quotes about: <category>. Add in popular hashtags to Tweets. Use one emoji per tweet. Export the tweets as JSON.
```

Addon Prompts:

```
Following the same format, generate 50 tweets about <category>.
```

## Categories

* Success
* Personal Growth
* Philosophy
* Software Engineering Humor
* Video Game Humor

## JSON Data Manipulation with ChatGPT

### Mapping JSON Objects with ChatGPT

Example of Input Object:

```JSON
  {
    "quote": "The only way to do great work is to love what you do.",
    "author": "Steve Jobs",
    "tweet": "Love what you do, grow in it ❤️ #LoveAndGrow #PersonalGrowth"
  },
```

Original Prompt:

```
Rewrite each JSON Object in the provided array. Create an additional key value of "hashtags" for each object in the provided array. Extract the hashtag text from the "tweet" key string. A hashtag is text prepended by the "#" symbol. This text will be associated with the hashtags key of each respective JSON object. Output the modified JSON object array.
```

Revised Prompt - fixing logic bug, where the hashtag text remains in the tweet string.

```
Output the modified JSON object array. I do not need the code. Just output the altered JSON. Rewrite each JSON Object in the provided array. Create an additional key value of "hashtags" for each object in the provided array. A hashtag is text prepended by the "#" symbol in the "tweet" string. Extract the hashtag text from the "tweet" key string. This text will be associated with the hashtags key of each respective JSON object. Then, remove the hashtag text from the "tweet" string. Please generate the entirely new array, not just the summary of changes. Do not output a snippet. Output the whole altered 50 object array.
```

Example of Resulting Object:

```JSON
  {
    "quote": "The only way to do great work is to love what you do.",
    "author": "Steve Jobs",
    "tweet": "Love and grow, do great work 💖",
    "hashtags": ["#LoveAndGrow", "#DoGreatWork"]
  },
```

#### Caveats and Lessons Learned

* OpenAI currently has limits on outputting the full array of altered objects if the input is larger than 15 or so objects.
* Occasionally you can get lucky and hit "continue generating" quickly enough for ChatGPT to properly continue the output of the array.
* However, for the sake of time, GPT 4.0 is too slow and 3.5 is too inaccurate.
* Better off using ChatGPT to create a script to help rewrite the JSON.

#### Updated Prompt Using GPT 4.0 Best Practices

```
Write a script for mapping over an array of JSON objects. The script's output should be JSON. Rewrite each JSON Object in the provided array. Create an additional key value of "hashtags" for each object in the provided array. "Hashtags" should be an array of stings. A hashtag is text prepended by the "#" symbol in the "tweet" string. Extract the hashtag text from the "tweet" key string. This text will be associated with the "hashtags" key of each respective JSON object. Then, remove the hashtag text from the "tweet" string. The script should be able to output the input emojis.
```

Resulting Script Example:

```JS
// fileLocation: scripts/hashtagExtractor.js

const tweetsData = []

const transformData = (data) => {
  return data.map((item) => {
    // Extract hashtags using regular expression
    const hashtags = item.tweet.match(/#\w+/g) || [];

    // Remove hashtags from the tweet string
    const tweet = item.tweet.replace(/#\w+/g, '').trim();

    return {
      ...item,
      tweet,
      hashtags
    };
  });
};

const transformedData = transformData(tweetsData);
console.log(transformedData);

```

Lesson Learned:

 * Run scripts in the browser console rather than as a node script in the CLI. That way emojis will copy over correctly.
