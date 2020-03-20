# IntroductionToAlgorithms_Study

        
------        
        
### 作者：冰红茶  
### 参考书籍：《Introduction to Algorithms》Third Edition Thomas H.Cormen; Charles E.Leiserson; Ronald L.Rivest; Clifford Stein 
### 参考书籍：《剑指Offer》第二版 何海涛
### 参考源：[leetcode：https://www.nowcoder.com/ta/leetcode](https://www.nowcoder.com/ta/leetcode)

            
------    
            
        

   算法技能是每个码农都绕不开的槛。一月份的时候看完了链表和二叉树的一部分，还有分治算法，打算再用一周的时间恶补一下其他的基础知识，然后再刷刷leetcode。复习一下以前的知识，然后准备上战场检验一下自己^_ ^
  
## 目录
- [IntroductionToAlgorithms_Study](#introductiontoalgorithmsstudy)
    - [作者：冰红茶](#%e4%bd%9c%e8%80%85%e5%86%b0%e7%ba%a2%e8%8c%b6)
    - [参考书籍：《Introduction to Algorithms》Third Edition Thomas H.Cormen; Charles E.Leiserson; Ronald L.Rivest; Clifford Stein](#%e5%8f%82%e8%80%83%e4%b9%a6%e7%b1%8dintroduction-to-algorithmsthird-edition-thomas-hcormen-charles-eleiserson-ronald-lrivest-clifford-stein)
    - [参考书籍：《剑指Offer》第二版 何海涛](#%e5%8f%82%e8%80%83%e4%b9%a6%e7%b1%8d%e5%89%91%e6%8c%87offer%e7%ac%ac%e4%ba%8c%e7%89%88-%e4%bd%95%e6%b5%b7%e6%b6%9b)
    - [参考源：leetcode：https://www.nowcoder.com/ta/leetcode](#%e5%8f%82%e8%80%83%e6%ba%90leetcodehttpswwwnowcodercomtaleetcode)
  - [目录](#%e7%9b%ae%e5%bd%95)
  - [一、分治问题](#%e4%b8%80%e5%88%86%e6%b2%bb%e9%97%ae%e9%a2%98)
    - [1.1 归并排序](#11-%e5%bd%92%e5%b9%b6%e6%8e%92%e5%ba%8f)
      - [1) 总体思路](#1-%e6%80%bb%e4%bd%93%e6%80%9d%e8%b7%af)
      - [1) 总体思路](#1-%e6%80%bb%e4%bd%93%e6%80%9d%e8%b7%af-1)
      - [1) 总体思路](#1-%e6%80%bb%e4%bd%93%e6%80%9d%e8%b7%af-2)
  - [三、数组问题](#%e4%b8%89%e6%95%b0%e7%bb%84%e9%97%ae%e9%a2%98)
    - [3.1、荷兰国旗问题](#31%e8%8d%b7%e5%85%b0%e5%9b%bd%e6%97%97%e9%97%ae%e9%a2%98)
      - [1) 总体思路](#1-%e6%80%bb%e4%bd%93%e6%80%9d%e8%b7%af-3)
  - [四、字符串问题](#%e5%9b%9b%e5%ad%97%e7%ac%a6%e4%b8%b2%e9%97%ae%e9%a2%98)
    - [4.1 基本模板](#41-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 递归法](#1-%e9%80%92%e5%bd%92%e6%b3%95)
      - [2) 迭代法](#2-%e8%bf%ad%e4%bb%a3%e6%b3%95)
  - [五、哈希表](#%e4%ba%94%e5%93%88%e5%b8%8c%e8%a1%a8)
    - [5.1 基本模板](#51-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 递归法](#1-%e9%80%92%e5%bd%92%e6%b3%95-1)
      - [2) 迭代法](#2-%e8%bf%ad%e4%bb%a3%e6%b3%95-1)
  - [六、栈和队列](#%e5%85%ad%e6%a0%88%e5%92%8c%e9%98%9f%e5%88%97)
    - [6.1 基本模板](#61-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 递归法](#1-%e9%80%92%e5%bd%92%e6%b3%95-2)
      - [2) 迭代法](#2-%e8%bf%ad%e4%bb%a3%e6%b3%95-2)
  - [七、链表](#%e4%b8%83%e9%93%be%e8%a1%a8)
    - [7.1 基本模板](#71-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 递归法](#1-%e9%80%92%e5%bd%92%e6%b3%95-3)
      - [2) 迭代法](#2-%e8%bf%ad%e4%bb%a3%e6%b3%95-3)
  - [八、树](#%e5%85%ab%e6%a0%91)
    - [8.1 基本模板](#81-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 递归法](#1-%e9%80%92%e5%bd%92%e6%b3%95-4)
      - [2) 迭代法](#2-%e8%bf%ad%e4%bb%a3%e6%b3%95-4)
  - [九、DFS深度优先搜索](#%e4%b9%9ddfs%e6%b7%b1%e5%ba%a6%e4%bc%98%e5%85%88%e6%90%9c%e7%b4%a2)
    - [9.1 基本模板](#91-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 递归法](#1-%e9%80%92%e5%bd%92%e6%b3%95-5)
      - [2) 迭代法](#2-%e8%bf%ad%e4%bb%a3%e6%b3%95-5)
  - [十、BFS广度优先搜索](#%e5%8d%81bfs%e5%b9%bf%e5%ba%a6%e4%bc%98%e5%85%88%e6%90%9c%e7%b4%a2)
    - [10.1 基本模板](#101-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 递归法](#1-%e9%80%92%e5%bd%92%e6%b3%95-6)
      - [2) 迭代法](#2-%e8%bf%ad%e4%bb%a3%e6%b3%95-6)
    - [10.2 题目](#102-%e9%a2%98%e7%9b%ae)
      - [简单](#%e7%ae%80%e5%8d%95)
      - [中等](#%e4%b8%ad%e7%ad%89)
  - [十一、贪心](#%e5%8d%81%e4%b8%80%e8%b4%aa%e5%bf%83)
    - [11.1 基本模板](#111-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 递归法](#1-%e9%80%92%e5%bd%92%e6%b3%95-7)
      - [2) 迭代法](#2-%e8%bf%ad%e4%bb%a3%e6%b3%95-7)
  - [十二、回溯法](#%e5%8d%81%e4%ba%8c%e5%9b%9e%e6%ba%af%e6%b3%95)
    - [12.1 基本模板](#121-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 递归法](#1-%e9%80%92%e5%bd%92%e6%b3%95-8)
      - [2) 迭代法](#2-%e8%bf%ad%e4%bb%a3%e6%b3%95-8)
  - [十三、动态规划](#%e5%8d%81%e4%b8%89%e5%8a%a8%e6%80%81%e8%a7%84%e5%88%92)
    - [13.1 与分治思想的异同](#131-%e4%b8%8e%e5%88%86%e6%b2%bb%e6%80%9d%e6%83%b3%e7%9a%84%e5%bc%82%e5%90%8c)
      - [1) 相同之处](#1-%e7%9b%b8%e5%90%8c%e4%b9%8b%e5%a4%84)
      - [2) 不同之处](#2-%e4%b8%8d%e5%90%8c%e4%b9%8b%e5%a4%84)
       
## 一、分治问题
### 1.1 归并排序
        
#### 1) 总体思路
> - 模版
```c
        int DivideStrategy(char *a, int left, int right){
            if(left==right){
                return …
            }else{
                int middle=(left+ right)/2;
                left= DivideStrategy(a, left, middle);
                right= DivideStrategy(a, middle+1, right);
                //其他操作；
                return …
            }
        }
```
> - 有一个缺点，如果采用原址排序的话，需要在合并的时候采用二阶循环，如果不采用原址排序的话，需要开辟多一倍的空间
```c
        /* ***************************************************************
        *      Filename: DividedSort.c
        *   Description:
        *       Version: 1.0
        *       Created: 2018/06/24 
        *      Revision: none
        *      Compiler: gcc
        *        Author: Lv Hongbin
        *       Company: Shanghai JiaoTong Univerity
        * **************************************************************/

        #include<stdio.h>
        #include<time.h>
        #include<sys/time.h>
        #include <stdlib.h>

        void SelectSort1(int array[], int n);
        void SelectSort2(int array[], int n);
        void BubbleSort(int array[], int n);
        void merge(int array[], int leftStart, int leftEnd, int rightEnd);
        void DividedSort(int array[], int start, int end);
        void Merge(int *a, int p, int q, int r );

        int main()
        {
            int array[] = {1,3,5,7,9,2,4,6,8};
            int i;
            struct timeval StartTime, EndTime;
            double cost;
            gettimeofday(&StartTime,NULL);
            DividedSort(array, 0, 8);
            for(i=0; i<9; i++) {
                printf("%d\t",array[i]);
                if(i%10 == 9) {
                    printf("\n");
                }
            }
            gettimeofday(&EndTime,NULL);
            cost=(EndTime.tv_sec-StartTime.tv_sec)*1000000+(EndTime.tv_usec-StartTime.tv_usec);
            printf("\n采用分治排序法 The time cost is %.f\n",cost);
            return 0;
        }

        // 分治法
        void DividedSort(int arrays[],int start, int end) {
            if(start < end) {
                int leftStart=start;
                int leftEnd=(start + end)/2;
                int rightStart=(start + end)/2 + 1;
                int rightEnd=end;
                // 左侧
                DividedSort(arrays, leftStart, leftEnd);

                // 右侧
                DividedSort(arrays, rightStart, rightEnd);

                // 合并
                Merge(arrays, leftStart, leftEnd, end);
            }
        }

        // 数组合并-空间复杂度为O(1);
        void merge(int array[], int leftStart, int leftEnd, int rightEnd) {
            int i=leftEnd, j=leftEnd, temp=0;

            // printf("\n合并前\n");
            // for(i=leftStart; i<=rightEnd; i++) {
            //  printf("%d\t",array[i]);
            // }
            // printf("\n");
            for(i=leftEnd; i<rightEnd; i++) {
                if(array[i] < array[i+1]) {
                    break;
                }
                for(j=i; j>=leftStart; j--) {
                    if(array[j] > array[j+1]) {
                        temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;
                    }
                }
            }
            // printf("\n合并后\n");
            // for(i=leftStart; i<=rightEnd; i++) {
            //  printf("%d\t",array[i]);
            // }
            // printf("\n");

        }

        // 数组合并-空间复杂度为O(1);
        void Merge(int array[], int leftStart, int leftEnd, int rightEnd){

                int i=0, j=0, temp=0;

                // printf("\n合并前\n");
                // for(i=leftStart; i<=rightEnd; i++) {
                //  printf("%d\t",array[i]);
                // }
                // printf("\n");

                int p = leftStart;
                int q = leftEnd+1;
                int n = rightEnd-leftStart+1;
                int *b=malloc(n * sizeof(int));
                for (i = 0; i < n; i++)
                {
                    if (p > leftEnd) {
                        b[i] = array[q];
                        q++;
                    }else if (q > rightEnd){
                        b[i] = array[p];
                        p++;
                    }else{
                        if(array[p] < array[q]) {
                            b[i] = array[p];
                            p++;
                        }else {
                            b[i] = array[q];
                            q++;
                        }
                    }
                }
                for (j=0; j < n; j++) {
                    array[leftStart+j] = b[j];
                }
                free(b);

                // printf("\n合并后\n");
                // for(i=leftStart; i<=rightEnd; i++) {
                //  printf("%d\t",array[i]);
                // }
                // printf("\n");
        }
```

<h3 id='1.2'>1.2 快速排序</h3>  
        
#### 1) 总体思路
> - 分解：将一个数组分为三部分，首先以最后一个元素为基准，比它大的放在右边，比它小的放在左边，然后将最后一个元素放在中间，采取原址排序的方法，最后返回基准元素的下标
> - 解决：通过递归调用快速排序，分别为array\[p...q-1\] array\[p...q+1\]，至于为什么没有array\[q\]元素，原因在于原址排序它的位置就是正确的位置，所以不需要动
> - 合并：由于是原址排序，所以没有必要合并
```c
        /* ***************************************************************
        *      Filename: QuickSort.c
        *   Description:
        *       Version: 1.0
        *       Created: 2018/06/24 
        *      Revision: none
        *      Compiler: gcc
        *        Author: Lv Hongbin
        *       Company: Shanghai JiaoTong Univerity
        * **************************************************************/

        #include<stdio.h>
        #include<time.h>
        #include<sys/time.h>
        #include <stdlib.h>

        int Divide(int array[], int Start, int end);
        void DividedSort(int array[],int start, int end);

        int main()
        {
            int array[] = { 1,3,5,7,9,2,4,6,8};
            int i;
            struct timeval StartTime, EndTime;
            double cost;
            gettimeofday(&StartTime,NULL);
            
            DividedSort(array,0 ,8);
            for(i=0; i<9; i++) {
                printf("%d\t",array[i]);
                if(i%10 == 9) {
                    printf("\n");
                }
            }
            gettimeofday(&EndTime,NULL);
            cost=(EndTime.tv_sec-StartTime.tv_sec)*1000000+(EndTime.tv_usec-StartTime.tv_usec);
            printf("\n采用快速排序法 The time cost is %.f\n",cost);
            return 0;
        }



        // 分治法
        void DividedSort(int array[],int start, int end) {
            if(start < end) {
                // 分解
                int DividePoint = Divide(array, start, end);

                int leftStart=start;
                int leftEnd=DividePoint-1;
                int rightStart=DividePoint + 1;
                int rightEnd=end;
                // 左侧
                DividedSort(array, leftStart, leftEnd);

                // 右侧
                DividedSort(array, rightStart, rightEnd);
            }
        }


        // Divide function
        // 以最后一个元素为基准进行原址排序
        int Divide(int array[], int start, int end) {

            int DividePoint = start-1;
            int i = start;
            int tem = 0;

            // printf("\n合并前\n");
            // for(i=start; i<=end; i++) {
            //  printf("%d\t",array[i]);
            // }
            // printf("\n");

            for(i = start; i<end; i++) {
                if (array[i] < array[end]) {
                    DividePoint++;
                    tem = array[i];
                    array[i] = array[DividePoint];
                    array[DividePoint] = tem;
                }
            }
            DividePoint++;
            tem = array[end];
            array[end] = array[DividePoint];
            array[DividePoint] = tem;

            // printf("\n合并后\n");
            // for(i=start; i<=end; i++) {
            //  prin                    tf("%d\t",array[i]);
            // }
            // printf("\n");
            // printf("DividePoint = %d\n", DividePoint);
            return DividePoint;
        }

```
<h3 id='1.3'>1.3 子数组和为定值</h3>  
        
#### 1) 总体思路
> -  sum = x\[0\]a\[0\] + x\[1\]a\[1\] + x\[2\]a\[2\] + x\[3\]a\[3\] +... 
> -  x数组表示该项的数是否存在，共有2^n种情况
> -  如果迭代的时候需要i的同步更新，则在迭代的时候传入i+1的值;
> -  x\[i-1\] != 0是为了避免出现sum已经等于目标值的情况下，由于后面的x值为0，那么也算作一种情况的话就会有重复的x数组出现

```c
        void Sum(int x[], int a[], int i, int sum) {
            if(i<7 && sum<=7) {
                if(sum == 7 && x[i-1] != 0) {
                    int j=0;
                    for(j=0; j<6; j++) {
                        printf("x[%d] = %d  ", j, x[j]); 
                    }
                    printf("\n\r");
                }
                x[i] = 1;
                Sum(x, a, i+1, sum+a[i]);
                x[i] = 0;
                Sum(x, a, i+1, sum);
            }
        }

        void main() {
            int a[6] = {0,1,2,3,4,5};
            int x[6] = {0,0,0,0,0,0};
            Sum(x, a, 0, 0);
        }

        // 结果
        x[0] = 1  x[1] = 1  x[2] = 1  x[3] = 0  x[4] = 1  x[5] = 0  

        x[0] = 1  x[1] = 0  x[2] = 1  x[3] = 0  x[4] = 0  x[5] = 1  

        x[0] = 1  x[1] = 0  x[2] = 0  x[3] = 1  x[4] = 1  x[5] = 0  

        x[0] = 0  x[1] = 1  x[2] = 1  x[3] = 0  x[4] = 1  x[5] = 0  

        x[0] = 0  x[1] = 0  x[2] = 1  x[3] = 0  x[4] = 0  x[5] = 1  

        x[0] = 0  x[1] = 0  x[2] = 0  x[3] = 1  x[4] = 1  x[5] = 0  
```
> - 分支限界条件 这是一个必要条件而表示充要条件 而且需要在数组的元素均大于0的前提下
> - 必要条件就是说有这个条件的话有可能达到目的，但是没有这个条件就不可能达到目的

```c
void Sum(int x[], int a[], int size, int i, int sum, int res, int targer) {
            if(i<size+1 ) {
                if(sum == targer && x[i-1] != 0) {
                    int j=0;
                    for(j=0; j<size; j++) {
                        printf("x[%d] = %d  ", j, x[j]); 
                    }
                    printf("\n\r");
                }
                if(sum <= targer && sum + res >= targer) {
                    x[i] = 1;
                    Sum(x, a, size, i+1, sum+a[i], res-a[i], targer);
                    }
                if(sum + res-a[i] >= targer) {
                    x[i] = 0;
                    Sum(x, a, size, i+1, sum, res-a[i], targer);
                }
            }
        }

        void main() {
            int a[10] = {1,2,3,4,5,6,7,8,9,10};
            int size = sizeof(a)/sizeof(int);
            int x = (int*)malloc(size*sizeof(int));
            memset(x,0,size);
            int res = 0;
            int j;
            for(j=0; j<size; j++) {
                res += a[j];
            }
            Sum(x, a, size, 0, 0, res, 40);
        }
```
        
## 三、数组问题
### 3.1、荷兰国旗问题
        
#### 1) 总体思路
```c
void exec(int a[], int size) {
            
            int j = -1;
            int i = -1;
            int k = -1;
            for(k=0; k<size; k++) {
                if(a[k] == 0 ) {
                    if(a[k-1] > a[k]) {
                        a[i+1] = a[i+1] ^ a[k];
                        a[k] = a[i+1] ^ a[k];
                        a[i+1] = a[i+1] ^ a[k];
                    }
                    i++;
                }
                if(a[k] == 1) {
                    if (a[k-1] > a[k]) {
                        a[j+1] = a[j+1] ^ a[k];
                        a[k] = a[j+1] ^ a[k];
                        a[j+1] = a[j+1] ^ a[k];   
                    }
                    j++;
                }
                
                // 由于1一直不出现,j被迫向前
                if(i>j) {
                    j=i;
                }
            }
        }

        void main() {
            // int a[7] = {0,0,0,2,2,2,1};
            // int a[7] = {2,2,2,0,0,0,1};
            int a[7] = {1,1,1,0,0,2,1};
            int size = sizeof(a)/sizeof(int);
            exec(a, size);
            int j;
            for(j=0; j<size; j++) {
                printf("a[%d]=%d ",j,a[j]);
            }
        }
```

## 四、字符串问题
### 4.1 基本模板 
        
#### 1) 递归法
> - 先序遍历()
#### 2) 迭代法
> - 分治方法将问题划分为互不相交的子问题，递归地求解子问题，再将它们的解组合起来，求出原问题的解
> - 动态规划则应用于子问题重叠的情况，即不同的子问题具有公共的子子问题，分治算法会做很多不必要的工作，他会反复求解那些公共子子问题。而动态规划算法对每个子子问题只求解一次，将其解保存在一个表格中，从而无需每次求解一个子问题时都需要重新计算，避免了这种不必要的计算工作。

## 五、哈希表
### 5.1 基本模板 
        
#### 1) 递归法
> - 先序遍历()
#### 2) 迭代法
> - 分治方法将问题划分为互不相交的子问题，递归地求解子问题，再将它们的解组合起来，求出原问题的解
> - 动态规划则应用于子问题重叠的情况，即不同的子问题具有公共的子子问题，分治算法会做很多不必要的工作，他会反复求解那些公共子子问题。而动态规划算法对每个子子问题只求解一次，将其解保存在一个表格中，从而无需每次求解一个子问题时都需要重新计算，避免了这种不必要的计算工作。

## 六、栈和队列
### 6.1 基本模板 
        
#### 1) 递归法
> - 先序遍历()
#### 2) 迭代法
> - 分治方法将问题划分为互不相交的子问题，递归地求解子问题，再将它们的解组合起来，求出原问题的解
> - 动态规划则应用于子问题重叠的情况，即不同的子问题具有公共的子子问题，分治算法会做很多不必要的工作，他会反复求解那些公共子子问题。而动态规划算法对每个子子问题只求解一次，将其解保存在一个表格中，从而无需每次求解一个子问题时都需要重新计算，避免了这种不必要的计算工作。

## 七、链表
### 7.1 基本模板 
        
#### 1) 递归法
> - 先序遍历()
#### 2) 迭代法
> - 分治方法将问题划分为互不相交的子问题，递归地求解子问题，再将它们的解组合起来，求出原问题的解
> - 动态规划则应用于子问题重叠的情况，即不同的子问题具有公共的子子问题，分治算法会做很多不必要的工作，他会反复求解那些公共子子问题。而动态规划算法对每个子子问题只求解一次，将其解保存在一个表格中，从而无需每次求解一个子问题时都需要重新计算，避免了这种不必要的计算工作。

## 八、树
### 8.1 基本模板 
        
#### 1) 递归法
> - 先序遍历()
#### 2) 迭代法
> - 分治方法将问题划分为互不相交的子问题，递归地求解子问题，再将它们的解组合起来，求出原问题的解
> - 动态规划则应用于子问题重叠的情况，即不同的子问题具有公共的子子问题，分治算法会做很多不必要的工作，他会反复求解那些公共子子问题。而动态规划算法对每个子子问题只求解一次，将其解保存在一个表格中，从而无需每次求解一个子问题时都需要重新计算，避免了这种不必要的计算工作。

## 九、DFS深度优先搜索
### 9.1 基本模板 
#### 1) 递归法
> - 先序遍历
```js
        var preOrderDFS = function(root, arg1, arg2, ...) {
            if(!root) return;
            // 输入你要处理的逻辑
            ...
            preOrderDFS(root.left, arg1, arg2, ...);
            preOrderDFS(root.right, arg1, arg2, ...);
            return;
        }
```
> - 中序遍历
```js
        var inOrderDFS = function(root, arg1, arg2, ...) {
            if(!root) return;
            inOrderDFS(root.left, arg1, arg2, ...);
            // 输入你要处理的逻辑
            ...
            inOrderDFS(root.right, arg1, arg2, ...);
            return;
        }
```
> - 后序遍历
```js
        var postOrderDFS = function(root, arg1, arg2, ...) {
            if(!root) return;
            postOrderDFS(root.left, arg1, arg2, ...);
            postOrderDFS(root.right, arg1, arg2, ...);
            // 输入你要处理的逻辑
            ...
            return;
        }
```
#### 2) 迭代法
> - 先序遍历
```js
        var preOrderDFS = function(root) {
            if(!root) return;
            const stack = [root];
            let i = stack.length;
            while(i) {
                while(i--) {
                    const front = stack.pop();
                    if(!front) continue;
                    // 输入你要处理的逻辑
                    ...
                    stack.push(front.right, front.left);
                }
                i = stack.length;
            }
            return;
        }
```
> - 中序遍历
```js
        var inOrderDFS = function(root) {
            if(!root) return;
            let head = root;
            const stack = [];
            while(stack.length || head) {
                while(head) {
                    stack.push(head);
                    head = head.left;
                }
                head = stack.pop();
                // do something
                console.log(head .val);
                head = head.right;
            }
        }
```
> - 后序遍历
```js
        
```


## 十、BFS广度优先搜索
### 10.1 基本模板 
        
#### 1) 递归法
> - 自上而下
> - 自下而上
#### 2) 迭代法
> - 自上而下
```js
        var Up2BottomBFS = function(root) {
            if(!root) return;
            const queue = [root];
            let i = queue.length;
            while(i) {
                while(i--) {
                    const front = queue.shift();
                    if(!front) continue;
                    // 输入你要处理的逻辑
                    ...
                    queue.push(front.left, front.right);
                }
                i = queue.length;
            }
            return;
        }
```
> - 自下而上

### 10.2 题目
#### 简单
#### [103 二叉树的锯齿形层次遍历](https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/)
```js
        var zigzagLevelOrder = function(root) {
            if(!root) return [];
            const queue = [root];
            let i = queue.length;
            let isPositive = false;
            const res = [];
            while(i) {
                isPositive = !isPositive;
                let temp = [];
                while(i--) {
                    const front = queue.shift();
                    if(!front) continue;
                    isPositive ? temp.push(front.val) : temp.unshift(front.val);
                    queue.push(front.left, front.right);
                }
                temp.length && res.push(temp);
                i = queue.length;
            }
            return res;
        };
```
#### [127 单词接龙](https://leetcode-cn.com/problems/word-ladder/)
```js
        var ladderLength = function(beginWord, endWord, wordList) {
            if(!wordList.includes(endWord)) return 0;
            let queue = [beginWord];
            let i = queue.length;
            let level = 0;
            while (i) {
                level++;
                while(i--) {
                    const front = queue.shift();
                    if(!front) continue;
                    if(front === endWord) return level;
                    for(let j = 0; j < wordList.length; j++) {
                        if(isOnlyOneDiff(front, wordList[j])) {
                            queue.push(wordList[j]);
                            wordList.splice(j, 1);
                            j--;
                        }
                    }
                }
                i = queue.length;
            }
            return 0;

            function isOnlyOneDiff(str1, str2) {
                if(str1 === str2) return false;
                let i = str1.length;
                let diff = 0;
                while(i--) {
                    if(str1[i] !== str2[i]) diff++;
                    if(diff > 1) return false;
                }
                return true;
            }
        };

```
#### [130. 被围绕的区域](https://leetcode-cn.com/problems/surrounded-regions/)
```js
        var solve = function(board) {
            const row = board.length;
            if(!row) return [];
            const col = board[0].length;
            for(let i = 0; i < row; i++) {
                dfs(board, i, 0);
                dfs(board, i, col - 1);
            }
            for(let i = 0; i < col; i++) {
                dfs(board, 0, i);
                dfs(board, row - 1, i);
            }
            for(let i = 0; i < row; i++) {
                for(let j = 0; j < col; j++) {
                    if(board[i][j] === 'O') {
                        board[i][j] = 'X';
                    }
                    else if(board[i][j] === '1') {
                        board[i][j] = 'O';
                    }
                }
            }
            function dfs(board, i, j) {
                if(i < 0 || i >= row || j < 0 || j >= col || board[i][j] === '1') return;
                if(board[i][j] === 'O') {
                    board[i][j] = '1';
                    dfs(board, i - 1, j);
                    dfs(board, i + 1, j);
                    dfs(board, i, j - 1);
                    dfs(board, i, j + 1);
                }
            }
        };
```
#### [199.二叉树的右视图](https://leetcode-cn.com/problems/binary-tree-right-side-view)
```js
        var rightSideView = function(root) {
            const queue = [root];
            let i = queue.length;
            const res = [];
            while(i) {
                let right;
                while(i--) {
                    const front = queue.shift();
                    if(!front) continue;
                    right = front.val;
                    queue.push(front.left, front.right)
                }
                right && res.push(right);
                i = queue.length;
            }
            return res;
        };
```

#### [200. 岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)
```js
        var numIslands = function(grid) {
            const row = grid.length;
            if(!row) return 0;
            const col = grid[0].length;
            let res = 0;
            for(let i = 0; i < row; i++) {
                for(let j = 0; j < col; j++) {
                    if(grid[i][j] === '1') {
                        res++;
                        dfs(grid, i, j);
                    }
                }
            }
            function dfs(grid, i, j) {
                if(i < 0 || i >= row || j < 0 || j >= col) return;
                if(grid[i][j] === '1') {
                    grid[i][j] = '0';
                    dfs(grid, i - 1, j);
                    dfs(grid, i + 1, j);
                    dfs(grid, i, j - 1);
                    dfs(grid, i, j + 1);
                }
            }
            return res;
        };
```
## 十一、贪心
### 11.1 基本模板 
        
#### 1) 递归法
> - 先序遍历()
#### 2) 迭代法
> - 分治方法将问题划分为互不相交的子问题，递归地求解子问题，再将它们的解组合起来，求出原问题的解
> - 动态规划则应用于子问题重叠的情况，即不同的子问题具有公共的子子问题，分治算法会做很多不必要的工作，他会反复求解那些公共子子问题。而动态规划算法对每个子子问题只求解一次，将其解保存在一个表格中，从而无需每次求解一个子问题时都需要重新计算，避免了这种不必要的计算工作。

## 十二、回溯法
### 12.1 基本模板 
        
#### 1) 递归法
> - 先序遍历()
#### 2) 迭代法
> - 分治方法将问题划分为互不相交的子问题，递归地求解子问题，再将它们的解组合起来，求出原问题的解
> - 动态规划则应用于子问题重叠的情况，即不同的子问题具有公共的子子问题，分治算法会做很多不必要的工作，他会反复求解那些公共子子问题。而动态规划算法对每个子子问题只求解一次，将其解保存在一个表格中，从而无需每次求解一个子问题时都需要重新计算，避免了这种不必要的计算工作。


## 十三、动态规划
### 13.1 与分治思想的异同
        
#### 1) 相同之处
> - 都是通过组合子问题的解来求解原问题
#### 2) 不同之处
> - 分治方法将问题划分为互不相交的子问题，递归地求解子问题，再将它们的解组合起来，求出原问题的解
> - 动态规划则应用于子问题重叠的情况，即不同的子问题具有公共的子子问题，分治算法会做很多不必要的工作，他会反复求解那些公共子子问题。而动态规划算法对每个子子问题只求解一次，将其解保存在一个表格中，从而无需每次求解一个子问题时都需要重新计算，避免了这种不必要的计算工作。


## 十四、图论
### 14.1 基本模板
        
#### 1) 有向图是否存在环
> - 拓扑排序
```js
        function topology(N, arr) {
            const indegree = new Array(N).fill(0);
            const record = {};
            arr.forEach(([pre, next]) => {
                if(!record[pre]) record[pre] = [];
                record[pre].push(next); // 构建有向图
                indegree[next]++; // 入度计算
            })
            const queue = indegree.reduce((t, i, index) => {
                !i && t.push(index);
                return t;
            }, []); // 寻找起点
            const res = [];
            while(queue.length) {
                const front = queue.shift();
                res.push(front);
                record[front] && record[front].forEach(child => {
                    indegree[child]--;
                    if(!indegree[child]) queue.push(child);
                })
            }
            return res.length === N;
        }
```
### 10.2 题目
#### [207. 课程表](https://leetcode-cn.com/problems/course-schedule/submissions/)
```js
        /**
         - @param {number} numCourses
         - @param {number[][]} prerequisites
         - @return {boolean}
         */
        var canFinish = function(numCourses, prerequisites) {
            const indegree = new Array(numCourses).fill(0);
            const record = {};
            prerequisites.forEach(([pre, next]) => {
                if(!record[pre]) record[pre] = [];
                record[pre].push(next); // 构建有向图
                indegree[next]++; // 入度计算
            })
            const queue = indegree.reduce((t, i, index) => {
                !i && t.push(index);
                return t;
            }, []);
            const res = [];
            while(queue.length) {
                const front = queue.shift();
                res.push(front);
                record[front] && record[front].forEach(child => {
                    indegree[child]--;
                    if(!indegree[child]) queue.push(child);
                })
            }
            return res.length === numCourses;
        };
```

