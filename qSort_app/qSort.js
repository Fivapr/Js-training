var arr;

function randomArray(){
  var arr = [];
  var arrMax, limit;
  arrMax = 100;
  limit = 10;
  for (var i = 0; i < arrMax; i++) {
    arr.push(Math.round(Math.random()*limit));
  }
  return arr;
}

arr = randomArray();
alert(arr);

function quickSort(arr, left, right){
  var pivot,
  partitionIndex;

  if (left<right){
    pivot = arr[right];
    partitionIndex = left;
    for (var i = left; i < right; i++) {
      if (arr[i]<pivot){
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(arr, partitionIndex, right);
    quickSort(arr, left, partitionIndex-1);
    quickSort(arr, partitionIndex+1, right);
  }
  return arr;
}

function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

arr = quickSort(arr, 0, arr.length-1);
alert(arr);
