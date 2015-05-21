#include <stdio.h>
#include <sys/un.h>

int main() {
	struct sockaddr_un s;
	printf("%lu\n", sizeof(s.sun_path));
	return 0;
}
