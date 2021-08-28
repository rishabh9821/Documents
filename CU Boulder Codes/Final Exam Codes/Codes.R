library(ggplot2)
library(dplyr)
library(ggpmisc)
library(tidyverse)
library(ggpubr)

covid <- read.csv("~/Documents/CU Boulder Codes/Final Exam Codes/covid.csv")
covid_pop <- read.csv("~/Documents/CU Boulder Codes/Final Exam Codes/COVID_time.csv")
covid_pop <- covid_pop[,12:13]
covid_tot <- merge(covid, covid_pop, by = "Combined_Key")

covid_state <- aggregate(covid_tot[10:16], 
                         by = list(covid_tot$Province_State), 
                         sum)

covid_state$Case_Pop_Ratio = covid_state$Confirmed / covid_state$Population

covid_state <- covid_state[!is.infinite(covid_state$Case_Pop_Ratio),]

covid_stateSort <- covid_state[order(-covid_state$Case_Pop_Ratio),]

ggplot(data = covid_tot, aes(x = Population, y = Confirmed)) + 
  geom_point() + 
  labs(title = "Population vs. Cases for all Data")


ggplot(data = covid_stateSort, aes(x = Population, y = Confirmed)) + 
       geom_point() + 
       labs(title = "Population vs. Cases for State Data (Log-Log Plot)") + 
       scale_y_log10() +
       scale_x_log10()

formula <- log(covid_stateSort$Confirmed) ~ log(covid_stateSort$Population)
ggplot(data = covid_stateSort, aes(x = Population, y = Confirmed)) + 
       geom_point() + 
       labs(title = "Population vs. Cases for State Data (Log-Log Plot)") + 
       scale_y_log10() +
       scale_x_log10() + 
       geom_smooth(method = "lm")

model <- lm(log(Confirmed) ~ log(Population), data = covid_stateSort)
summary(model)

       



