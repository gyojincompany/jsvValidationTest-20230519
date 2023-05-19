/**
 * 회원 가입 유효성 체크 
 */

function joinCheck() {
	
	/* 아이디가 공란으로 입력되었는지 체크 */
	if(document.joinForm.id.value.length == 0) {
		alert('아이디는 필수 입력사항입니다. 다시 확인해 주세요!');
		return false;
	}
	
	/* 비밀번호가 공란으로 입력되었는지 체크 */
	if(document.joinForm.pw.value.length == 0) {
		alert('비밀번호는 필수 입력사항입니다. 다시 확인해 주세요!');
		return false;
	}
	
	/* 아이디가 4~10 사이의 글자수로 입력하도록 체크 */
	if(document.joinForm.id.value.length < 4 || document.joinForm.id.value.length > 10) {
		alert('아이디는 4자 이상 10자 이하로만 만드실 수 있습니다. 다시 확인해 주세요!');
		return false;
	}
	
	/* 전화번호 값이 모두 숫자인지 체크 */
	if(isNaN(document.joinForm.phone.value)) {
		alert('전화번호는 숫자만 입력가능합니다. 다시 확인해 주세요!');
		return false;
	}
	
	var regExpPasswd = /^[0-9]*$/;
	
	if(!regExpPasswd.test(document.joinForm.pw.value)) {
		alert('비밀번호에는 문자가 들어올 수 없습니다. 숫자만 입력해주세요!');
		return false;
	}
	
	var hangulName = /^[가-힣]*$/;
	
	if(!hangulName.test(document.joinForm.name.value)) {
		alert('이름은 한글만 입력가능합니다!');
		return false;
	}
	
	return true;
	
	
}


 