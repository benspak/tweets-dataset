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
