### Merge Sort

```js
import java.util.*;
class Main{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        mergeSort(arr, 0, n-1);
        for(int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    static void mergeSort(int[] arr, int start, int end ){
        if(start >= end) return;

        int mid = start + (end - start)/2;
        mergeSort(arr, start, mid);
        mergeSort(arr, mid+1, end);
        mergeTwoArr(arr, start, mid, end);
    }
    static void mergeTwoArr(int[] arr, int start, int mid, int end) {
        int[] leftarr = copyArray(arr, start, mid);
        int[] rightarr = copyArray(arr, mid+1, end);

        int p1 = 0;
        int p2 = 0;
        int p = start;
        while(p1 < leftarr.length && p2 < rightarr.length){
            if(leftarr[p1] < rightarr[p2]  ){
                arr[p] = leftarr[p1];
                p1++;
                p++;
            }else{
                arr[p] = rightarr[p2];
                p2++;
                p++;
            }
        }
        while(p1 < leftarr.length){
            arr[p] = leftarr[p1];
                p1++;
                p++;
        }
        while(p2 < rightarr.length){
            arr[p] = rightarr[p2];
                p2++;
                p++;
        }

    }

    static int[] copyArray(int[] arr, int start, int end){
        int[] newarr = new int[end - start + 1];
        for(int i = 0; i < newarr.length ; i++){
            newarr[i] = arr[i+start];
        }
        return newarr;
    }
}
```
