function getmaxmin(arr, n) {
  minmax = new Array();
  var i = 2;
  var max = 0;
  var min = 0;
  if (n == 1) {
    minmax.max = arr[0];
    minmax.min = arr[0];
    return minmax;
  }
  if (arr[0] > arr[1]) {
    minmax.max = arr[0];
    minmax.min = arr[1];
  } else if (arr[1] > arr[0]) {
    minmax.max = arr[1];
    minmax.min = arr[0];
  }
  for (i = 2; i < n; i++) {
    if (arr[i] > minmax.max) {
      minmax.max = arr[i];
    }
    if (arr[i] < minmax.min) {
      minmax.min = arr[i];
    }
  }
  return minmax;
}
minmax = getmaxmin([23, 44, 53, 21], 4);

document.write('\nMinimum element is ', minmax.min + '<br>');
document.write('\nMaximum element is ', minmax.max);
/*function getMinMax(arr, n)
{
    minmax = new  Array();
    var i;
    var min;
    var max;

    /*If there is only one element then return it as min and max both
    if (n == 1) {
        minmax.max = arr[0];
        minmax.min = arr[0];
        return minmax;
    }

    /* If there are more than one elements, then initialize min
and max
    if (arr[0] > arr[1]) {
        minmax.max = arr[0];
        minmax.min = arr[1];
    } else {
        minmax.max = arr[1];
        minmax.min = arr[0];
    }

    for (i = 2; i < n; i++) {
        if (arr[i] > minmax.max) {
            minmax.max = arr[i];
        } else if (arr[i] < minmax.min) {
            minmax.min = arr[i];
        }
    }

    return minmax;
}

/* Driver program to test above function /
 
    var arr = [1000, 11, 445, 1, 330, 3000];
    var arr_size = 6;
    minmax = getMinMax(arr, arr_size);
    document.write("\nMinimum element is " ,minmax.min +"<br>");
    document.write("\nMaximum element is " , minmax.max);
    */