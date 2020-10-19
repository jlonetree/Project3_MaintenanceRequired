require 'test_helper'

class MainScreensControllerTest < ActionDispatch::IntegrationTest
  setup do
    @main_screen = main_screens(:one)
  end

  test "should get index" do
    get main_screens_url
    assert_response :success
  end

  test "should get new" do
    get new_main_screen_url
    assert_response :success
  end

  test "should create main_screen" do
    assert_difference('MainScreen.count') do
      post main_screens_url, params: { main_screen: {  } }
    end

    assert_redirected_to main_screen_url(MainScreen.last)
  end

  test "should show main_screen" do
    get main_screen_url(@main_screen)
    assert_response :success
  end

  test "should get edit" do
    get edit_main_screen_url(@main_screen)
    assert_response :success
  end

  test "should update main_screen" do
    patch main_screen_url(@main_screen), params: { main_screen: {  } }
    assert_redirected_to main_screen_url(@main_screen)
  end

  test "should destroy main_screen" do
    assert_difference('MainScreen.count', -1) do
      delete main_screen_url(@main_screen)
    end

    assert_redirected_to main_screens_url
  end
end
