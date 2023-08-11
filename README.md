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

### Mapping JSON Objects | tweets_personal-growth.json

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
Output the modified JSON object array. I do not need the code. Just output the altered JSON. Rewrite each JSON Object in the provided array. Create an additional key value of "hashtags" for each object in the provided array. A hashtag is text prepended by the "#" symbol in the "tweet" string. Extract the hashtag text from the "tweet" key string. This text will be associated with the hashtags key of each respective JSON object. Then, remove the hashtag text from the "tweet" string. Please generate the entirely new array, not just the summary of changes. Do not show a snippet. Show the whole multi-item altered array of objects.
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
