require 'test_helper'

class PaddleGamesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @paddle_game = paddle_games(:one)
  end

  test "should get index" do
    get paddle_games_url
    assert_response :success
  end

  test "should get new" do
    get new_paddle_game_url
    assert_response :success
  end

  test "should create paddle_game" do
    assert_difference('PaddleGame.count') do
      post paddle_games_url, params: { paddle_game: {  } }
    end

    assert_redirected_to paddle_game_url(PaddleGame.last)
  end

  test "should show paddle_game" do
    get paddle_game_url(@paddle_game)
    assert_response :success
  end

  test "should get edit" do
    get edit_paddle_game_url(@paddle_game)
    assert_response :success
  end

  test "should update paddle_game" do
    patch paddle_game_url(@paddle_game), params: { paddle_game: {  } }
    assert_redirected_to paddle_game_url(@paddle_game)
  end

  test "should destroy paddle_game" do
    assert_difference('PaddleGame.count', -1) do
      delete paddle_game_url(@paddle_game)
    end

    assert_redirected_to paddle_games_url
  end
end
