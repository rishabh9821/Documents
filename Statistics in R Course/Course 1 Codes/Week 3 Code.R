library(statsr)
library(dplyr)
library(ggplot2)

data(kobe_basket)

kobe_streak <- calc_streak(kobe_basket$shot)

ggplot(data = kobe_streak, aes(x = length)) + geom_histogram(binwidth = 1)

coinOutcomes <- c("heads","tails") 
sample(coinOutcomes, size = 1,replace = TRUE)

simFairCoin <- sample(coinOutcomes, size = 100, replace = TRUE)
simUnfairCoin <- sample(coinOutcomes, size = 100, replace = TRUE, prob = c(.2,.8))

shot_outcomes <- c("H","M")
simbasket <- sample(shot_outcomes,size = 133, replace=TRUE, prob = c(.45,.55))
sim_streak <- calc_streak(simbasket)

ggplot(data = sim_streak,aes(x = length)) + geom_histogram(binwidth = 1)