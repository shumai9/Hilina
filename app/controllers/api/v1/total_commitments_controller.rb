class Api::V1::TotalCommitmentsController < ApplicationController
  before_action :set_total_commitment, only: [:show, :update, :destroy]

  # GET /total_commitments
  # GET /total_commitments.json
  def index
    @total_commitments = TotalCommitment.all
  end

  # GET /total_commitments/1
  # GET /total_commitments/1.json
  def show
  end

  # POST /total_commitments
  # POST /total_commitments.json
  def create
    @total_commitment = TotalCommitment.new(total_commitment_params)

    if @total_commitment.save
      render :show, status: :created, location: @total_commitment
    else
      render json: @total_commitment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /total_commitments/1
  # PATCH/PUT /total_commitments/1.json
  def update
    if @total_commitment.update(total_commitment_params)
      render :show, status: :ok, location: @total_commitment
    else
      render json: @total_commitment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /total_commitments/1
  # DELETE /total_commitments/1.json
  def destroy
    @total_commitment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_total_commitment
      @total_commitment = TotalCommitment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def total_commitment_params
      params.fetch(:total_commitment, {})
    end
end
