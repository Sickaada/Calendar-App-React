const refreshTokenSetup = (response) => {
	let refreshTiming = (response.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
	const refreshToken = async () => {
		const newAuthRes = await response.reloadAuthResponse();
		refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
		// console.log('newAuthRes:', newAuthRes);
		// saveUserToken(newAuthRes.access_token);  <-- save new token
		localStorage.setItem('authToken', newAuthRes.id_token);
		setTimeout(refreshToken, refreshTiming);
	};
	setTimeout(refreshToken, refreshTiming);
};
export default refreshTokenSetup;
