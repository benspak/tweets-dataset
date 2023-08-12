const tweets = []


function processTweets(tweets) {
  return tweets.map(tweetObject => {
    // Extract the tweet text
    const tweetText = tweetObject.tweet;

    // Regular expression to match hashtags
    const hashtagPattern = /#[a-zA-Z0-9]+/g;

    // Find all hashtags in the tweet
    const hashtags = tweetText.match(hashtagPattern) || [];

    // Remove the hashtags from the tweet
    const cleanTweet = tweetText.replace(hashtagPattern, "").trim();

    // Return the updated object with hashtags key
    return {
      ...tweetObject,
      tweet: cleanTweet,
      hashtags: hashtags
    };
  });
}

const processedTweets = processTweets(tweets);

console.log(processedTweets);
