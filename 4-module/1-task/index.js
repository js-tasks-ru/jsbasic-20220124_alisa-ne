function makeFriendsList(friends) {

	const newUl = document.createElement('UL');
	for (friend of friends) {
		newUl.insertAdjacentHTML('beforeEnd', `<li>${friend.firstName} ${friend.lastName}</li>`);
	}
	return newUl;
}