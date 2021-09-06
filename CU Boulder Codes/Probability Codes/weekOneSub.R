## Bisection Method

probFunc = function(N) {
    days = 365
    returnVal = 1
    for (i in 0:(N-1)) {
        returnVal = returnVal * ((days - i)/days)
    }
    returnVal = 1 - returnVal
    return(returnVal)
}
probFunc(3)


startVal = 3
endVal = 66
errorNeeded = .01
valNeeded = .5

currentError = 1

while (currentError > errorNeeded) {
    probBegin = probFunc(startVal) - valNeeded
    probEnd = probFunc(endVal) - valNeeded

    middleVal = round((startVal + endVal) / 2, digits = 0)

    probMiddle = probFunc(middleVal) - valNeeded

    
    currentError = abs(probFunc(middleVal) - .5)
    

    if (probMiddle > 0) {
        endVal = middleVal
    } else if (probMiddle < 0) {
        startVal = middleVal
    } 
}
print(middleVal)

library(ggplot2)

# vals = c()
# inputs = 1:119
# for (i in 1:119) {
#     vals = c(vals, probFunc(i))
# }

# dataVals <- data.frame(vals, inputs)

# ggplot(dataVals, aes(x = inputs, y = vals)) + 
# geom_line() + xlab('Input') + ylab('Probability Values') + 
# ggtitle('Probability Distribution of at least 2 People Having the Same Birthday')

numList = c(1,2,3,4,5,6)
sample(numList, size = 1, replace = FALSE)

set.seed(112358)
# Your Code Here

barplot(table(sample(numList, size=12, replace=TRUE)))

## Not exactly but at this level (12 rolls), the noise is fairly high

barplot(table(sample(numList, size=120, replace=TRUE)))

## Looking at this distribution, this follows a uniform distribution more strongly




