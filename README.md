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
      - [1) 统计频率](#1-%e7%bb%9f%e8%ae%a1%e9%a2%91%e7%8e%87)
      - [1) 过滤重复数字](#1-%e8%bf%87%e6%bb%a4%e9%87%8d%e5%a4%8d%e6%95%b0%e5%ad%97)
      - [2) 题目](#2-%e9%a2%98%e7%9b%ae)
      - [347. 前 K 个高频元素](#347-%e5%89%8d-k-%e4%b8%aa%e9%ab%98%e9%a2%91%e5%85%83%e7%b4%a0)
  - [六、栈和队列](#%e5%85%ad%e6%a0%88%e5%92%8c%e9%98%9f%e5%88%97)
    - [6.1 基本模板](#61-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 递归法](#1-%e9%80%92%e5%bd%92%e6%b3%95-2)
    - [6.2 题目](#62-%e9%a2%98%e7%9b%ae)
      - [946. 验证栈序列](#946-%e9%aa%8c%e8%af%81%e6%a0%88%e5%ba%8f%e5%88%97)
  - [七、链表](#%e4%b8%83%e9%93%be%e8%a1%a8)
    - [7.1 基本模板](#71-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 快慢指针](#1-%e5%bf%ab%e6%85%a2%e6%8c%87%e9%92%88)
    - [7.2 题目](#72-%e9%a2%98%e7%9b%ae)
      - [876. 链表的中间结点](#876-%e9%93%be%e8%a1%a8%e7%9a%84%e4%b8%ad%e9%97%b4%e7%bb%93%e7%82%b9)
  - [八、树](#%e5%85%ab%e6%a0%91)
    - [8.1 基本模板](#81-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 递归法](#1-%e9%80%92%e5%bd%92%e6%b3%95-3)
      - [2) 迭代法](#2-%e8%bf%ad%e4%bb%a3%e6%b3%95-2)
  - [九、DFS深度优先搜索](#%e4%b9%9ddfs%e6%b7%b1%e5%ba%a6%e4%bc%98%e5%85%88%e6%90%9c%e7%b4%a2)
    - [9.1 基本模板](#91-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 递归法](#1-%e9%80%92%e5%bd%92%e6%b3%95-4)
      - [2) 迭代法](#2-%e8%bf%ad%e4%bb%a3%e6%b3%95-3)
  - [十、BFS广度优先搜索](#%e5%8d%81bfs%e5%b9%bf%e5%ba%a6%e4%bc%98%e5%85%88%e6%90%9c%e7%b4%a2)
    - [10.1 基本模板](#101-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 递归法](#1-%e9%80%92%e5%bd%92%e6%b3%95-5)
      - [2) 迭代法](#2-%e8%bf%ad%e4%bb%a3%e6%b3%95-4)
    - [10.2 题目](#102-%e9%a2%98%e7%9b%ae)
      - [103 二叉树的锯齿形层次遍历](#103-%e4%ba%8c%e5%8f%89%e6%a0%91%e7%9a%84%e9%94%af%e9%bd%bf%e5%bd%a2%e5%b1%82%e6%ac%a1%e9%81%8d%e5%8e%86)
      - [127 单词接龙](#127-%e5%8d%95%e8%af%8d%e6%8e%a5%e9%be%99)
      - [130. 被围绕的区域](#130-%e8%a2%ab%e5%9b%b4%e7%bb%95%e7%9a%84%e5%8c%ba%e5%9f%9f)
      - [199.二叉树的右视图](#199%e4%ba%8c%e5%8f%89%e6%a0%91%e7%9a%84%e5%8f%b3%e8%a7%86%e5%9b%be)
      - [200. 岛屿数量](#200-%e5%b2%9b%e5%b1%bf%e6%95%b0%e9%87%8f)
      - [面试题13. 机器人的运动范围](#%e9%9d%a2%e8%af%95%e9%a2%9813-%e6%9c%ba%e5%99%a8%e4%ba%ba%e7%9a%84%e8%bf%90%e5%8a%a8%e8%8c%83%e5%9b%b4)
  - [十一、贪心](#%e5%8d%81%e4%b8%80%e8%b4%aa%e5%bf%83)
    - [11.1 基本模板](#111-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 递归法](#1-%e9%80%92%e5%bd%92%e6%b3%95-6)
      - [2) 迭代法](#2-%e8%bf%ad%e4%bb%a3%e6%b3%95-5)
  - [十二、回溯法](#%e5%8d%81%e4%ba%8c%e5%9b%9e%e6%ba%af%e6%b3%95)
    - [12.1 基本模板](#121-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 递归](#1-%e9%80%92%e5%bd%92)
      - [2) 迭代法](#2-%e8%bf%ad%e4%bb%a3%e6%b3%95-6)
    - [12.2 题目](#122-%e9%a2%98%e7%9b%ae)
      - [79. 单词搜索](#79-%e5%8d%95%e8%af%8d%e6%90%9c%e7%b4%a2)
      - [212. 单词搜索 II](#212-%e5%8d%95%e8%af%8d%e6%90%9c%e7%b4%a2-ii)
  - [十三、动态规划](#%e5%8d%81%e4%b8%89%e5%8a%a8%e6%80%81%e8%a7%84%e5%88%92)
    - [13.1 与分治思想的异同](#131-%e4%b8%8e%e5%88%86%e6%b2%bb%e6%80%9d%e6%83%b3%e7%9a%84%e5%bc%82%e5%90%8c)
      - [1) 相同之处](#1-%e7%9b%b8%e5%90%8c%e4%b9%8b%e5%a4%84)
      - [2) 不同之处](#2-%e4%b8%8d%e5%90%8c%e4%b9%8b%e5%a4%84)
  - [十四、图论](#%e5%8d%81%e5%9b%9b%e5%9b%be%e8%ae%ba)
    - [14.1 基本模板](#141-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 图的遍历](#1-%e5%9b%be%e7%9a%84%e9%81%8d%e5%8e%86)
      - [1) 有向图是否存在环](#1-%e6%9c%89%e5%90%91%e5%9b%be%e6%98%af%e5%90%a6%e5%ad%98%e5%9c%a8%e7%8e%af)
      - [2) 构造无向图](#2-%e6%9e%84%e9%80%a0%e6%97%a0%e5%90%91%e5%9b%be)
    - [14.2 题目](#142-%e9%a2%98%e7%9b%ae)
      - [207. 课程表](#207-%e8%af%be%e7%a8%8b%e8%a1%a8)
      - [310. 最小高度树](#310-%e6%9c%80%e5%b0%8f%e9%ab%98%e5%ba%a6%e6%a0%91)
  - [十五、数学问题](#%e5%8d%81%e4%ba%94%e6%95%b0%e5%ad%a6%e9%97%ae%e9%a2%98)
    - [15.1 基本模板](#151-%e5%9f%ba%e6%9c%ac%e6%a8%a1%e6%9d%bf)
      - [1) 最大公约数](#1-%e6%9c%80%e5%a4%a7%e5%85%ac%e7%ba%a6%e6%95%b0)
    - [15.2 题目](#152-%e9%a2%98%e7%9b%ae)
      - [365. 水壶问题](#365-%e6%b0%b4%e5%a3%b6%e9%97%ae%e9%a2%98)
      - [264. 丑数 II](#264-%e4%b8%91%e6%95%b0-ii)
      - [313. 超级丑数](#313-%e8%b6%85%e7%ba%a7%e4%b8%91%e6%95%b0)
       
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
        
#### 1) 统计频率
```js
        const res = nums.reduce((t, i) => {
            t[i] = t[i] ? t[i] + 1 : 1;
            return t;
        }, {});
```
#### 1) 过滤重复数字
```js
        const record = {};
        const res = nums.reduce((t, i) => {
            if(!record[i]) {
                record[i] = true;
                t.push(i);
            }
            return t;
        }, []);
```
#### 2) 题目
#### [347. 前 K 个高频元素](https://leetcode-cn.com/problems/top-k-frequent-elements/)
```js
       /**
        * @param {number[]} nums
        * @param {number} k
        * @return {number[]}
        */
       var topKFrequent = function(nums, k) {
           const record = nums.reduce((t, i) => {
               t[i] = t[i] ? t[i] + 1 : 1;
               return t;
           }, {});
           return Object.entries(record)
               .sort((a, b) => b[1] - a[1])
               .slice(0, k)
               .map(entry => +entry[0]);
       };
```

## 六、栈和队列
### 6.1 基本模板 
        
#### 1) 递归法
> - 先序遍历()
### 6.2 题目
#### [946. 验证栈序列](https://leetcode-cn.com/problems/validate-stack-sequences/submissions/)
```js
        /**
        * @param {number[]} pushed
        * @param {number[]} popped
        * @return {boolean}
        */
        var validateStackSequences = function(pushed, popped) {
            const stask = [];
            let popHead = 0, j;
            for(let i = 0; i < pushed.length; i++) {
                if(pushed[i] !== popped[popHead]) stask.push(pushed[i]);
                else popHead++;
                j = stask.length - 1;
                while(j >=0 && stask[j] === popped[popHead]) {
                    j--;
                    popHead++;
                }
                stask.splice(j + 1);
            }
            return popHead === pushed.length;
        };
```

## 七、链表
### 7.1 基本模板 
        
#### 1) 快慢指针
> - 双指针
```js
        var middleNode = function(head) {
            slow = fast = head;
            while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;
            }
            return slow;
        };
```
### 7.2 题目
#### [876. 链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list/solution/lian-biao-de-zhong-jian-jie-dian-by-leetcode-solut/)
```js
        /**
         * Definition for singly-linked list.
         * function ListNode(val) {
         *     this.val = val;
         *     this.next = null;
         * }
         */
        /**
         * @param {ListNode} head
         * @return {ListNode}
         */
        var middleNode = function(head) {
            if(!head) return null;
            let slow = head;
            let quick = head.next;
            while(quick && quick.next) {
                slow = slow.next;
                quick = quick.next.next;
            }
            return quick ? slow.next : slow;
        };
```

## 八、树
### 8.1 基本模板 
        
### 8.2 题目
#### [面试题26. 树的子结构](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/submissions/)
```js
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} A
         * @param {TreeNode} B
         * @return {boolean}
         */
        var isSubStructure = function(A, B) {
            if (!B) return false;
            function isEqual(A, B) {
                if (!B) return true;
                if (!A) return false;
                if (A.val !== B.val) return false;
                return isEqual(A.left, B.left) && isEqual(A.right, B.right);
            }
            const queue = [A];
            let i = queue.length;
            while(i) {
                while(i--) {
                    const front = queue.shift();
                    if(!front) continue;
                    if(front.val === B.val && isEqual(front, B)) return true;
                    front.push(front.left, front.right);
                }
                i = queue.length;
            }
            return false;
        };
```

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
#### [面试题13. 机器人的运动范围](https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/)
```js
        /**
        * @param {number} m
        * @param {number} n
        * @param {number} k
        * @return {number}
        */
        var movingCount = function(m, n, k) {
            const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            function numDFS(i, j, isVisited) {
                const key = i + '-' + j;
                if (i < 0 || i >= m || j < 0 || j >= n || isVisited[key]) return 0;
                if (('' + i + j).split('').reduce((t, i) => t + +i, 0) > k) return 0;
                isVisited[key] = true;
                return dir.reduce((t, [offsetX, offsetY]) => t + numDFS(i + offsetX, j + offsetY, isVisited), 0) + 1;
            }
            return numDFS(0, 0, {});
        };

        // BFS 版本，只需要走两个方向
        var movingCount = function(m, n, k) {
        const queue = [[0, 0]];
        let res = 0, i = 1;
        const isVisited = {};
        while(i) {
            while(i--) {
                const [i, j] = queue.shift();
                const key = i + '-' + j;
                if (i >= m || j >= n || isVisited[key] || ('' + i + j).split('').reduce((t, i) => t + +i, 0) > k) continue;
                res++;
                isVisited[key] = true;
                queue.push([i + 1, j], [i, j + 1])
            }
            i = queue.length;
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
        
#### 1) 递归
```js
        var exist = function(board, word) {
            const row = board.length;
            if(!row) return false;
            const col = board[0].length;
            const dir = [[-1,0], [1, 0], [0, -1], [0, 1]]; // 四个方向
            for(let i = 0; i < row; i++) {
            for(let j = 0; j < col; j++) {
                if(board[i][j] === word[0]) {
                    if(isExist(i, j, 0)) return true;
                } 
                } 
            }
            function isExist(i, j, num) {
                if (i < 0 || i >= row || j < 0 || j >= col // 边界条件
                    || board[i][j] !== word[num]) return false;
                if (word.length - 1 === num) return true; // 成功条件
                board[i][j] = '*';
                num++;
                const res = dir.some(([x, y]) => isExist(i + x, j + y, num));
                board[i][j] = res ? '*' : word[num - 1]; // 回溯
                return res;
            }
            return false;
        };
```
#### 2) 迭代法
> - 分治方法将问题划分为互不相交的子问题，递归地求解子问题，再将它们的解组合起来，求出原问题的解
> - 动态规划则应用于子问题重叠的情况，即不同的子问题具有公共的子子问题，分治算法会做很多不必要的工作，他会反复求解那些公共子子问题。而动态规划算法对每个子子问题只求解一次，将其解保存在一个表格中，从而无需每次求解一个子问题时都需要重新计算，避免了这种不必要的计算工作。
### 12.2 题目
#### [79. 单词搜索](https://leetcode-cn.com/problems/word-search/submissions/)
```js
        /**
        * @param {character[][]} board
        * @param {string} word
        * @return {boolean}
        */
        var exist = function(board, word) {
            const row = board.length;
            if(!row) return false;
            const col = board[0].length;
            const dir = [[-1,0], [1, 0], [0, -1], [0, 1]]; // 四个方向
            for(let i = 0; i < row; i++) {
            for(let j = 0; j < col; j++) {
                if(board[i][j] === word[0]) {
                    if(isExist(i, j, 0)) return true;
                } 
                } 
            }
            function isExist(i, j, num) {
                if (i < 0 || i >= row || j < 0 || j >= col // 边界条件
                    || board[i][j] !== word[num]) return false;
                if (word.length - 1 === num) return true; // 成功条件
                board[i][j] = '*';
                num++;
                const res = dir.some(([x, y]) => isExist(i + x, j + y, num));
                board[i][j] = res ? '*' : word[num - 1]; // 回溯
                return res;
            }
            return false;
        };
```
#### [212. 单词搜索 II](https://leetcode-cn.com/problems/word-search-ii/solution/js-dfsbao-sou-by-hblvsjtu/)
```js
        /**
        * @param {character[][]} board
        * @param {string[]} words
        * @return {string[]}
        */
        var findWords = function(board, words) {
            const row = board.length;
            if(!row) return [];
            const col = board[0].length;
            const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            function dfs(i, j, num, word, copyBoard) {
                if(i < 0 || i >= row || j < 0 || j >= col || copyBoard[i][j] !== word[num]) return false;
                if(num === word.length - 1) return true;
                copyBoard[i][j] = '*';
                const res = dir.some(a => dfs(i + a[0], j + a[1], num + 1, word, copyBoard));
                copyBoard[i][j] = res ? '*' : word[num];
                return res;
            }
            function isExist(word, copyBoard) {
                for(let i = 0; i < row; i++) {
                    for(let j = 0; j < col; j++) {
                        if(board[i][j] === word[0])
                            if(dfs(i, j, 0, word, copyBoard)) return true;
                    }
                }
                return false;
            }
            return words.filter(i => isExist(i, JSON.parse(JSON.stringify(board))));
        };
```

## 十三、动态规划
### 13.1 与分治思想的异同
        
#### 1) 相同之处
> - 都是通过组合子问题的解来求解原问题
#### 2) 不同之处
> - 分治方法将问题划分为互不相交的子问题，递归地求解子问题，再将它们的解组合起来，求出原问题的解
> - 动态规划则应用于子问题重叠的情况，即不同的子问题具有公共的子子问题，分治算法会做很多不必要的工作，他会反复求解那些公共子子问题。而动态规划算法对每个子子问题只求解一次，将其解保存在一个表格中，从而无需每次求解一个子问题时都需要重新计算，避免了这种不必要的计算工作。


## 十四、图论
### 14.1 基本模板

#### 1) 图的遍历
> - BFS
```js
        var BFS = function(n, edges) {
            const record = {};
            for(let i = 0; i < n; i++) record[i] = [];
            edges.forEach(([a, b]) => { // 记录相邻节点
                record[a].push(b);
                record[b].push(a);
            })
            const flag = [];
            const pre = {}; // 记录父节点
            const deep = {}; // 记录深度
            const root = 1;
            const queue = [root];
            deep[root] = 1;7
            pre[root] = null;
            let i = queue.length;
            const res = []; // 记录遍历结果
            while(i) {
                while(i--) {
                    const front = queue.shift();
                    if(front === undefined) continue;
                    flag[front] = 1;
                    res.push(front);
                    const children = record[front];
                    children.forEach(child => {
                        if(!flag[child]) {
                            flag[child] = 1;
                            deep[child] = deep[front] + 1;
                            pre[child] = front;
                            queue.push(child);
                        }
                    })
                    flag[front] = -1;
                }
                i = queue.length;
            }
            const paths = {}; // 记录路径
            for(let i = 0; i < n; i++) {
                paths[i] = [];
                let j = i;
                while(j !== root) {
                    paths[i].unshift(j);
                    j = pre[j];
                }
                paths[i].unshift(root);
            }
            console.log(res, paths);
        };
```
> - DFS
```js
        var DFS = function(n, edges) {
            const record = {};
            for(let i = 0; i < n; i++) record[i] = [];
            edges.forEach(([a, b]) => {
                record[a].push(b);
                record[b].push(a);
            })
            console.log(record);
            const flag = [];
            const pre = {}; // 记录父节点
            const deep = {}; // 记录深度
            const res = []; // 记录遍历结果
            const root = 0;
            for(let i = root; i < n; i++) {
                if(flag[i] === undefined) dfsVisit(i, null, 0);
            }
            function dfsVisit(root, pai, d) {
                if(flag[root] === -1) return;
                flag[root] = 1;
                res.push(root);
                pre[root] = pai;
                deep[root] = d + 1;
                record[root].forEach(child => {
                    if(!flag[child]) {
                        dfsVisit(child, root, deep[root]);
                    }
                })
                flag[root] = -1;
            }
            const paths = {}; // 记录
            for(let i = 0; i < n; i++) {
                paths[i] = [];
                let j = i;
                while(j !== root) {
                    paths[i].unshift(j);
                    j = pre[j];
                }
                paths[i].unshift(root);
            }
            console.log(res, paths);
        };
```
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
> - DFS递归版本
```js
        /**
        * @param {number} numCourses
        * @param {number[][]} prerequisites
        * @return {boolean}
        */
        var canFinish = function(numCourses, prerequisites) {
            const record = {};
            prerequisites.forEach(([pre, next]) => {
                if(!record[pre]) record[pre] = [];
                record[pre].push(next); // 构建有向图
            })
            let flag = []; // 标志位表示该课程是否被遍历 -1: 上一个DFS被遍历；0: 没有被遍历；1:本轮已被遍历
            for(let i = 0; i < numCourses; i++) {
                if(isCircle(i)) return false;
            }
            function isCircle(course) {
                if(flag[course] === 1) return true;
                if(flag[course] === -1) return false;
                flag[course] = 1;
                if(record[course] && 
                    record[course].some(child => isCircle(child)))
                    return true;
                flag[course] = -1;
                return false;
            }
            return true;
        };
```
> - DFS非递归版本
```js
        function canFinish(N, arr) {
            const indegree = new Array(N).fill(0);
            const record = {};
            arr.forEach(([pre, next]) => {
                if(!record[pre]) record[pre] = [];
                record[pre].push(next); // 构建有向图
                indegree[next]++; // 入度计算
            })
            const stack = indegree.reduce((t, i, index) => {
                !i && t.push(index);
                return t;
            }, []); // 寻找起点
            const res = [];
            const flag = [];
            while(stack.length) {
                const front = stack.pop();
                res.push(front);
                flag[front] = 1;
                const nexts = record[front];
                if(nexts) {
                    const len = nexts.length;
                    for(let j = 0; j < len; j++) {
                        if(flag[nexts[j]] === 1) return false;
                        if(flag[nexts[j]] === -1) continue;
                        if(!--indegree[nexts[j]]) stack.push(nexts[j]);
                    }
                }
                flag[front] = -1;
            }
            return res.length === N;
        }
```
#### 2) 构造无向图
> - 暴力
```js
        var findMinHeightTrees = function(n, edges) {
            const record = {};
            for(let i = 0; i < n; i++) record[i] = new Set();
            edges.forEach(([a, b]) => {
                record[a].add(b);
                record[b].add(a);
            })
            let items = Object.keys(record).map(i => +i);
            let queues = items.filter(key => record[key].size === 1);
            let res;
            while(queues.length) {
                res = queues;
                items = Object.keys(record).map(i => +i);
                queues = items.filter(key => record[key].size === 1); // 筛选size === 1的节点和删除节点两个动作需要分开
                queues.forEach(key => {
                    const next = record[Array.from(record[key])[0]];
                    if(next) next.delete(key);
                    delete record[key];
                })
            }
            return items.length ? items : res;
        };
```
> - BFS出度
```js
        var findMinHeightTrees = function(n, edges) {
            const record = {};
            for(let i = 0; i < n; i++) record[i] = new Set();
            edges.forEach(([a, b]) => {
                record[a].add(b);
                record[b].add(a);
            })
            const outDegree = [];
            for(let i = 0; i < n; i++) outDegree[i] = record[i].size;
            let queues = outDegree.reduce((t, i, index) => {
                i === 1 && t.push(index);
                return t;
            }, [])
            let res = [0];
            let i = queues.length;
            while(i) {
                res = queues.slice(0); // 记录倒数第2个结果
                while(i--) {
                    const front = queues.shift();
                    outDegree[front]--;
                    const next = [...record[front]][0];
                    if(next !== undefined) {
                        record[next].delete(front);
                        if(--outDegree[next] === 1) queues.push(next);
                    }
                }
                i = queues.length;
            }
            return res;
        };
```
### 14.2 题目
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

#### [310. 最小高度树](https://leetcode-cn.com/problems/minimum-height-trees/)
> - js 一层层剥开暴力解
```js
        /**
        * @param {number} n
        * @param {number[][]} edges
        * @return {number[]}
        */
        var findMinHeightTrees = function(n, edges) {
            const record = {};
            for(let i = 0; i < n; i++) record[i] = new Set();
            edges.forEach(([a, b]) => {
                record[a].add(b);
                record[b].add(a);
            })
            let items = Object.keys(record).map(i => +i);
            let queues = items.filter(key => record[key].size === 1);
            let res;
            while(queues.length) {
                res = queues;
                items = Object.keys(record).map(i => +i);
                queues = items.filter(key => record[key].size === 1);
                queues.forEach(key => {
                    const next = record[Array.from(record[key])[0]];
                    if(next) next.delete(key);
                    delete record[key];
                })
            }
            return items.length ? items : res;
        };
```
> - BFS出度
```js
        /**
        * @param {number} n
        * @param {number[][]} edges
        * @return {number[]}
        */
        var findMinHeightTrees = function(n, edges) {
            const record = {};
            for(let i = 0; i < n; i++) record[i] = new Set();
            edges.forEach(([a, b]) => {
                record[a].add(b);
                record[b].add(a);
            })
            const outDegree = [];
            for(let i = 0; i < n; i++) outDegree[i] = record[i].size;
            let queues = outDegree.reduce((t, i, index) => {
                i === 1 && t.push(index);
                return t;
            }, [])
            let res = [0];
            let i = queues.length;
            while(i) {
                res = queues.slice(0); // 记录倒数第2个结果
                while(i--) {
                    const front = queues.shift();
                    outDegree[front]--;
                    const next = [...record[front]][0];
                    if(next !== undefined) {
                        record[next].delete(front);
                        if(--outDegree[next] === 1) queues.push(next);
                    }
                }
                i = queues.length;
            }
            return res;
        };
```

## 十五、数学问题
### 15.1 基本模板
        
#### 1) 最大公约数
> - 
```js
        function(x, y) {
            while(y) [x, y] = [y, x % y];
            return x;
        }
```
### 15.2 题目
#### [365. 水壶问题](https://leetcode-cn.com/problems/water-and-jug-problem/)
```js
        var canMeasureWater = function(x, y, z) {
            if(x + y < z) return false;
            while(y) [x, y] = [y, x % y];
            return !(z % x);
        };
```
#### [264. 丑数 II](https://leetcode-cn.com/problems/ugly-number-ii/submissions/)
```js
        var nthUglyNumber = function(n) {
            let i2 = 0,
                i3 = 0,
                i5 = 0;
            let dp = [1];
            for (let i = 1; i < n; i++) {
                let min = Math.min(dp[i2] * 2, dp[i3] * 3, dp[i5] * 5);
                if (min === dp[i2] * 2) i2++;
                if (min === dp[i3] * 3) i3++;
                if (min === dp[i5] * 5) i5++;
                dp.push(min);
            }
            return dp[n-1];
        };
```
#### [313. 超级丑数](https://leetcode-cn.com/problems/super-ugly-number/submissions/)
```js
        /**
         * @param {number} n
         * @param {number[]} primes
         * @return {number}
         */
        var nthSuperUglyNumber = function(n, primes) {
            const res = [1];
            const points = new Array(primes.length).fill(0);
            let min;
            for(let i = 1; i < n; i++) {
                const map = primes.map((prime, index) => res[points[index]] * prime);
                min = Math.min(...map);
                primes.forEach((prime, index) => {
                    if(map[index] === min) points[index]++;
                })
                res.push(min);
            }
            return res[n - 1];
        };
```
#### [面试题62. 圆圈中最后剩下的数字](https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/)
```js
        /**
         - @param {number} n
         - @param {number} m
         - @return {number}
         */
        var lastRemaining = function(n, m) {
            const arr = [];
            for(let i = 0; i < n; i++) arr.push(i);
            let head = 0;
            while(arr.length > 1) {
                head = (head + m - 1) % arr.length;
                arr.splice(head, 1);
            }
            return arr[0];
        };
```

