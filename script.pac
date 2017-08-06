function FindProxyForURL(url, host) {
 
	if (isInNet(myIpAddress(), "14.000.00.00", "15.000.00.00"))
	    return "PROXY 10.7.0.1:8080";

	else
		return "DIRECT";

}

