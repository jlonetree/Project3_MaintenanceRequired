require 'test_helper'

class ScoreBoardsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @score_board = score_boards(:one)
  end

  test "should get index" do
    get score_boards_url
    assert_response :success
  end

  test "should get new" do
    get new_score_board_url
    assert_response :success
  end

  test "should create score_board" do
    assert_difference('ScoreBoard.count') do
      post score_boards_url, params: { score_board: { score_id: @score_board.score_id, user_id: @score_board.user_id } }
    end

    assert_redirected_to score_board_url(ScoreBoard.last)
  end

  test "should show score_board" do
    get score_board_url(@score_board)
    assert_response :success
  end

  test "should get edit" do
    get edit_score_board_url(@score_board)
    assert_response :success
  end

  test "should update score_board" do
    patch score_board_url(@score_board), params: { score_board: { score_id: @score_board.score_id, user_id: @score_board.user_id } }
    assert_redirected_to score_board_url(@score_board)
  end

  test "should destroy score_board" do
    assert_difference('ScoreBoard.count', -1) do
      delete score_board_url(@score_board)
    end

    assert_redirected_to score_boards_url
  end
end
