fixed size window => format 

while(j< size){
    calculations
    if(winSize < k){
        j++
    }
    else if (winSize == k){
        ans -> calculations
        calculation to remove i;
        window size maintained and slide it
        i++;
        j++
    }
}


variable size window => format

while(j < size){
    calculations
    if(calculations < condition){
        j++
    }
    else if (calculations === condition){
        ans -> calculations
        j++
    }
    else if(calculations > condition){
        while(calculations > condition){
            calcualtions to come out of while loop -> remove calculation of i
            i++
        }
        j++; // since we know condition is less than so we can increase the window size

    }
}