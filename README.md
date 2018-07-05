# IntroductionToAlgorithms_Study

## 四、构建Web应用
        
------        
        
### 作者：冰红茶  
### 参考书籍：《Introduction to Algorithms》Third Edition Thomas H.Cormen; Charles E.Leiserson; Ronald L.Rivest; Clifford Stein 
### 参考书籍：《剑指Offer》第二版 何海涛
### 参考源：[leetcode：https://www.nowcoder.com/ta/leetcode](https://www.nowcoder.com/ta/leetcode)

            
------    
            
        

   算法技能是每个码农都绕不开的槛。一月份的时候看完了链表和二叉树的一部分，还有分治算法，打算再用一周的时间恶补一下其他的基础知识，然后再刷刷leetcode。复习一下以前的知识，然后准备上战场检验一下自己^_ ^
  
## 目录

## [一、分治问题](#1)
### [1.1 归并排序](#1.1)
### [1.2 快速排序](#1.2) 
### [1.3 子数组和为定值](#1.3) 
## [二、动态规划](#2)
### [2.1 归并排序](#2.1) 
## [三、数组问题] 
### [3.1、荷兰国旗问题]
        
------      
        
<h2 id='1'>一、分治问题</h2>
<h3 id='1.1'>1.1 归并排序</h3>  
        
#### 1) 总体思路
> - 模版
                
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
> - 有一个缺点，如果采用原址排序的话，需要在合并的时候采用二阶循环，如果不采用原址排序的话，需要开辟多一倍的空间
                
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

<h3 id='1.2'>1.2 快速排序</h3>  
        
#### 1) 总体思路
> - 分解：将一个数组分为三部分，首先以最后一个元素为基准，比它大的放在右边，比它小的放在左边，然后将最后一个元素放在中间，采取原址排序的方法，最后返回基准元素的下标
> - 解决：通过递归调用快速排序，分别为array\[p...q-1\] array\[p...q+1\]，至于为什么没有array\[q\]元素，原因在于原址排序它的位置就是正确的位置，所以不需要动
> - 合并：由于是原址排序，所以没有必要合并
                
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

<h3 id='1.3'>1.3 子数组和为定值</h3>  
        
#### 1) 总体思路
> -  sum = x\[0\]a\[0\] + x\[1\]a\[1\] + x\[2\]a\[2\] + x\[3\]a\[3\] +... 
> -  x数组表示该项的数是否存在，共有2^n种情况
> -  如果迭代的时候需要i的同步更新，则在迭代的时候传入i+1的值;
> -  x\[i-1\] != 0是为了避免出现sum已经等于目标值的情况下，由于后面的x值为0，那么也算作一种情况的话就会有重复的x数组出现
                
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
> - 分支限界条件 这是一个必要条件而表示充要条件 而且需要在数组的元素均大于0的前提下
> - 必要条件就是说有这个条件的话有可能达到目的，但是没有这个条件就不可能达到目的
                
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
> - 
> - 
------      
        
<h2 id='2'>二、动态规划</h2>
<h3 id='2.1'>2.1 与分治思想的异同</h3>  
        
#### 1) 相同之处
> - 都是通过组合子问题的解来求解原问题
#### 2) 不同之处
> - 分治方法将问题划分为互不相交的子问题，递归地求解子问题，再将它们的解组合起来，求出原问题的解
> - 动态规划则应用于子问题重叠的情况，即不同的子问题具有公共的子子问题，分治算法会做很多不必要的工作，他会反复求解那些公共子子问题。而动态规划算法对每个子子问题只求解一次，将其解保存在一个表格中，从而无需每次求解一个子问题时都需要重新计算，避免了这种不必要的计算工作。
> - 
        
------      
        
<h2 id='3'>三、数组问题</h2>
<h3 id='3.1'>3.1、荷兰国旗问题</h3>  
        
#### 1) 总体思路
> - 
                
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
                
                