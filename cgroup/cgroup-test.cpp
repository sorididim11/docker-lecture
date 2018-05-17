#include <iostream>
using std::cout;
using std::endl;

int main()
{
    int i=0;
    char* ptr =NULL;
    while(i<50){
        if ((ptr = new char[1024768]) == NULL) {///1MB allocated
        cout << "Allocation fails at " << i << "MB\n";
        return 0;
        }
        cout << "Allocated "<< i+1 << "MB\n";
        i++;
    }
    cout << "Finished allocation";
    return 0;
}