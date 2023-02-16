namespace GeometricTransformations;

partial class MainForm
{
    /// <summary>
    ///  Required designer variable.
    /// </summary>
    private System.ComponentModel.IContainer components = null;

    /// <summary>
    ///  Clean up any resources being used.
    /// </summary>
    /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
    protected override void Dispose(bool disposing)
    {
        if (disposing && (components != null))
        {
            components.Dispose();
        }

        base.Dispose(disposing);
    }

    #region Windows Form Designer generated code

    /// <summary>
    ///  Required method for Designer support - do not modify
    ///  the contents of this method with the code editor.
    /// </summary>
    private void InitializeComponent()
    {
            this.chooseColorButton = new System.Windows.Forms.Button();
            this.clearScreenButton = new System.Windows.Forms.Button();
            this.yCoordinateTextBox = new System.Windows.Forms.TextBox();
            this.yCoordinateLabel = new System.Windows.Forms.Label();
            this.drawPointButton = new System.Windows.Forms.Button();
            this.xCoordinateTextBox = new System.Windows.Forms.TextBox();
            this.xCoordinateLabel = new System.Windows.Forms.Label();
            this.canvasContainer = new System.Windows.Forms.PictureBox();
            this.ColorDialog = new System.Windows.Forms.ColorDialog();
            this.executeTransformationsButton = new System.Windows.Forms.Button();
            this.rotationDegreesWordLabel = new System.Windows.Forms.Label();
            this.rotationDegreesTextBox = new System.Windows.Forms.TextBox();
            this.rotationDegreesTitleLabel = new System.Windows.Forms.Label();
            this.pointListBox = new System.Windows.Forms.ListBox();
            this.infosAndScreenInteractionsPanel = new System.Windows.Forms.Panel();
            this.resultingMatrixLabel = new System.Windows.Forms.Label();
            this.matrixListBox = new System.Windows.Forms.ListBox();
            this.pointListLabel = new System.Windows.Forms.Label();
            this.transformationsPanel = new System.Windows.Forms.Panel();
            this.reflectionGroupBox = new System.Windows.Forms.GroupBox();
            this.inBothAxesReflectionRadioButton = new System.Windows.Forms.RadioButton();
            this.inYReflectionRadioButton = new System.Windows.Forms.RadioButton();
            this.inXReflectionRadioButton = new System.Windows.Forms.RadioButton();
            this.reflectionTitleLabel = new System.Windows.Forms.Label();
            this.yAxisScaleLabel = new System.Windows.Forms.Label();
            this.yAxisScaleTextBox = new System.Windows.Forms.TextBox();
            this.xAxisScaleLabel = new System.Windows.Forms.Label();
            this.xAxisScaleTextBox = new System.Windows.Forms.TextBox();
            this.scaleTitleLabel = new System.Windows.Forms.Label();
            this.yAxisTranslationLabel = new System.Windows.Forms.Label();
            this.yAxisTranslationTextBox = new System.Windows.Forms.TextBox();
            this.xAxisTranslationLabel = new System.Windows.Forms.Label();
            this.xAxisTranslationTextBox = new System.Windows.Forms.TextBox();
            this.translationTitleLabel = new System.Windows.Forms.Label();
            this.shearTitleLabel = new System.Windows.Forms.Label();
            this.shearInYLabel = new System.Windows.Forms.Label();
            this.shearInYTextBox = new System.Windows.Forms.TextBox();
            this.shearInXLabel = new System.Windows.Forms.Label();
            this.shearInXTextBox = new System.Windows.Forms.TextBox();
            ((System.ComponentModel.ISupportInitialize)(this.canvasContainer)).BeginInit();
            this.infosAndScreenInteractionsPanel.SuspendLayout();
            this.transformationsPanel.SuspendLayout();
            this.reflectionGroupBox.SuspendLayout();
            this.SuspendLayout();
            // 
            // chooseColorButton
            // 
            this.chooseColorButton.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.chooseColorButton.AutoSize = true;
            this.chooseColorButton.Font = new System.Drawing.Font("Segoe UI", 8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.chooseColorButton.Location = new System.Drawing.Point(140, 38);
            this.chooseColorButton.Margin = new System.Windows.Forms.Padding(2);
            this.chooseColorButton.Name = "chooseColorButton";
            this.chooseColorButton.Size = new System.Drawing.Size(100, 23);
            this.chooseColorButton.TabIndex = 5;
            this.chooseColorButton.Text = "Escolher cor";
            this.chooseColorButton.UseVisualStyleBackColor = true;
            this.chooseColorButton.Click += new System.EventHandler(this.ChooseColorButton_OnClick);
            // 
            // clearScreenButton
            // 
            this.clearScreenButton.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.clearScreenButton.AutoSize = true;
            this.clearScreenButton.Font = new System.Drawing.Font("Segoe UI", 8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.clearScreenButton.Location = new System.Drawing.Point(140, 65);
            this.clearScreenButton.Margin = new System.Windows.Forms.Padding(2);
            this.clearScreenButton.Name = "clearScreenButton";
            this.clearScreenButton.Size = new System.Drawing.Size(100, 23);
            this.clearScreenButton.TabIndex = 6;
            this.clearScreenButton.Text = "Limpar tela";
            this.clearScreenButton.UseVisualStyleBackColor = true;
            this.clearScreenButton.Click += new System.EventHandler(this.ClearScreenButton_OnClick);
            // 
            // yCoordinateTextBox
            // 
            this.yCoordinateTextBox.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left)));
            this.yCoordinateTextBox.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.yCoordinateTextBox.Location = new System.Drawing.Point(8, 68);
            this.yCoordinateTextBox.Margin = new System.Windows.Forms.Padding(2);
            this.yCoordinateTextBox.Name = "yCoordinateTextBox";
            this.yCoordinateTextBox.Size = new System.Drawing.Size(93, 23);
            this.yCoordinateTextBox.TabIndex = 7;
            this.yCoordinateTextBox.Text = "0";
            // 
            // yCoordinateLabel
            // 
            this.yCoordinateLabel.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left)));
            this.yCoordinateLabel.AutoSize = true;
            this.yCoordinateLabel.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.yCoordinateLabel.Location = new System.Drawing.Point(8, 51);
            this.yCoordinateLabel.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.yCoordinateLabel.Name = "yCoordinateLabel";
            this.yCoordinateLabel.Size = new System.Drawing.Size(83, 15);
            this.yCoordinateLabel.TabIndex = 6;
            this.yCoordinateLabel.Text = "Coordenada Y";
            // 
            // drawPointButton
            // 
            this.drawPointButton.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.drawPointButton.AutoSize = true;
            this.drawPointButton.Font = new System.Drawing.Font("Segoe UI", 8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.drawPointButton.Location = new System.Drawing.Point(140, 10);
            this.drawPointButton.Margin = new System.Windows.Forms.Padding(2);
            this.drawPointButton.Name = "drawPointButton";
            this.drawPointButton.Size = new System.Drawing.Size(101, 23);
            this.drawPointButton.TabIndex = 7;
            this.drawPointButton.Text = "Desenhar ponto";
            this.drawPointButton.UseVisualStyleBackColor = true;
            this.drawPointButton.Click += new System.EventHandler(this.DrawPointButton_OnClick);
            // 
            // xCoordinateTextBox
            // 
            this.xCoordinateTextBox.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left)));
            this.xCoordinateTextBox.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.xCoordinateTextBox.Location = new System.Drawing.Point(8, 27);
            this.xCoordinateTextBox.Margin = new System.Windows.Forms.Padding(2);
            this.xCoordinateTextBox.Name = "xCoordinateTextBox";
            this.xCoordinateTextBox.Size = new System.Drawing.Size(93, 23);
            this.xCoordinateTextBox.TabIndex = 5;
            this.xCoordinateTextBox.Text = "0";
            // 
            // xCoordinateLabel
            // 
            this.xCoordinateLabel.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left)));
            this.xCoordinateLabel.AutoSize = true;
            this.xCoordinateLabel.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.xCoordinateLabel.Location = new System.Drawing.Point(8, 10);
            this.xCoordinateLabel.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.xCoordinateLabel.Name = "xCoordinateLabel";
            this.xCoordinateLabel.Size = new System.Drawing.Size(84, 15);
            this.xCoordinateLabel.TabIndex = 4;
            this.xCoordinateLabel.Text = "Coordenada X";
            // 
            // canvasContainer
            // 
            this.canvasContainer.BackColor = System.Drawing.Color.White;
            this.canvasContainer.Dock = System.Windows.Forms.DockStyle.Fill;
            this.canvasContainer.Location = new System.Drawing.Point(0, 0);
            this.canvasContainer.Margin = new System.Windows.Forms.Padding(2);
            this.canvasContainer.Name = "canvasContainer";
            this.canvasContainer.Size = new System.Drawing.Size(607, 307);
            this.canvasContainer.TabIndex = 4;
            this.canvasContainer.TabStop = false;
            this.canvasContainer.MouseClick += new System.Windows.Forms.MouseEventHandler(this.CanvasContainer_OnMouseClick);
            this.canvasContainer.MouseMove += new System.Windows.Forms.MouseEventHandler(this.CanvasContainer_OnMouseMove);
            // 
            // executeTransformationsButton
            // 
            this.executeTransformationsButton.Font = new System.Drawing.Font("Segoe UI", 8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.executeTransformationsButton.Location = new System.Drawing.Point(99, 179);
            this.executeTransformationsButton.Margin = new System.Windows.Forms.Padding(2);
            this.executeTransformationsButton.Name = "executeTransformationsButton";
            this.executeTransformationsButton.Size = new System.Drawing.Size(78, 20);
            this.executeTransformationsButton.TabIndex = 14;
            this.executeTransformationsButton.Text = "Executar transformações";
            this.executeTransformationsButton.UseVisualStyleBackColor = true;
            this.executeTransformationsButton.Click += new System.EventHandler(this.ExecuteTransformationsButton_OnClick);
            // 
            // rotationDegreesWordLabel
            // 
            this.rotationDegreesWordLabel.AutoSize = true;
            this.rotationDegreesWordLabel.Location = new System.Drawing.Point(150, 10);
            this.rotationDegreesWordLabel.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.rotationDegreesWordLabel.Name = "rotationDegreesWordLabel";
            this.rotationDegreesWordLabel.Size = new System.Drawing.Size(36, 15);
            this.rotationDegreesWordLabel.TabIndex = 13;
            this.rotationDegreesWordLabel.Text = "graus";
            // 
            // rotationDegreesTextBox
            // 
            this.rotationDegreesTextBox.Location = new System.Drawing.Point(99, 8);
            this.rotationDegreesTextBox.Margin = new System.Windows.Forms.Padding(2);
            this.rotationDegreesTextBox.Name = "rotationDegreesTextBox";
            this.rotationDegreesTextBox.Size = new System.Drawing.Size(47, 23);
            this.rotationDegreesTextBox.TabIndex = 12;
            // 
            // rotationDegreesTitleLabel
            // 
            this.rotationDegreesTitleLabel.AutoSize = true;
            this.rotationDegreesTitleLabel.Location = new System.Drawing.Point(10, 10);
            this.rotationDegreesTitleLabel.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.rotationDegreesTitleLabel.Name = "rotationDegreesTitleLabel";
            this.rotationDegreesTitleLabel.Size = new System.Drawing.Size(80, 15);
            this.rotationDegreesTitleLabel.TabIndex = 11;
            this.rotationDegreesTitleLabel.Text = "Rotacionar de";
            // 
            // pointListBox
            // 
            this.pointListBox.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.pointListBox.FormattingEnabled = true;
            this.pointListBox.ItemHeight = 15;
            this.pointListBox.Location = new System.Drawing.Point(279, 26);
            this.pointListBox.Margin = new System.Windows.Forms.Padding(2);
            this.pointListBox.Name = "pointListBox";
            this.pointListBox.Size = new System.Drawing.Size(119, 64);
            this.pointListBox.TabIndex = 10;
            // 
            // infosAndScreenInteractionsPanel
            // 
            this.infosAndScreenInteractionsPanel.Controls.Add(this.resultingMatrixLabel);
            this.infosAndScreenInteractionsPanel.Controls.Add(this.matrixListBox);
            this.infosAndScreenInteractionsPanel.Controls.Add(this.pointListBox);
            this.infosAndScreenInteractionsPanel.Controls.Add(this.xCoordinateLabel);
            this.infosAndScreenInteractionsPanel.Controls.Add(this.pointListLabel);
            this.infosAndScreenInteractionsPanel.Controls.Add(this.yCoordinateLabel);
            this.infosAndScreenInteractionsPanel.Controls.Add(this.chooseColorButton);
            this.infosAndScreenInteractionsPanel.Controls.Add(this.drawPointButton);
            this.infosAndScreenInteractionsPanel.Controls.Add(this.yCoordinateTextBox);
            this.infosAndScreenInteractionsPanel.Controls.Add(this.clearScreenButton);
            this.infosAndScreenInteractionsPanel.Controls.Add(this.xCoordinateTextBox);
            this.infosAndScreenInteractionsPanel.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.infosAndScreenInteractionsPanel.Location = new System.Drawing.Point(0, 212);
            this.infosAndScreenInteractionsPanel.Margin = new System.Windows.Forms.Padding(2);
            this.infosAndScreenInteractionsPanel.Name = "infosAndScreenInteractionsPanel";
            this.infosAndScreenInteractionsPanel.Size = new System.Drawing.Size(607, 95);
            this.infosAndScreenInteractionsPanel.TabIndex = 17;
            // 
            // resultingMatrixLabel
            // 
            this.resultingMatrixLabel.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.resultingMatrixLabel.AutoSize = true;
            this.resultingMatrixLabel.Location = new System.Drawing.Point(430, 8);
            this.resultingMatrixLabel.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.resultingMatrixLabel.Name = "resultingMatrixLabel";
            this.resultingMatrixLabel.Size = new System.Drawing.Size(102, 15);
            this.resultingMatrixLabel.TabIndex = 12;
            this.resultingMatrixLabel.Text = "Matrix Resultante:";
            // 
            // matrixListBox
            // 
            this.matrixListBox.FormattingEnabled = true;
            this.matrixListBox.ItemHeight = 15;
            this.matrixListBox.Location = new System.Drawing.Point(434, 25);
            this.matrixListBox.Margin = new System.Windows.Forms.Padding(2);
            this.matrixListBox.Name = "matrixListBox";
            this.matrixListBox.Size = new System.Drawing.Size(166, 64);
            this.matrixListBox.TabIndex = 11;
            // 
            // pointListLabel
            // 
            this.pointListLabel.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.pointListLabel.AutoSize = true;
            this.pointListLabel.Location = new System.Drawing.Point(276, 8);
            this.pointListLabel.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.pointListLabel.Name = "pointListLabel";
            this.pointListLabel.Size = new System.Drawing.Size(47, 15);
            this.pointListLabel.TabIndex = 9;
            this.pointListLabel.Text = "Pontos:";
            // 
            // transformationsPanel
            // 
            this.transformationsPanel.Controls.Add(this.shearInYLabel);
            this.transformationsPanel.Controls.Add(this.shearInYTextBox);
            this.transformationsPanel.Controls.Add(this.shearInXLabel);
            this.transformationsPanel.Controls.Add(this.shearInXTextBox);
            this.transformationsPanel.Controls.Add(this.shearTitleLabel);
            this.transformationsPanel.Controls.Add(this.reflectionGroupBox);
            this.transformationsPanel.Controls.Add(this.reflectionTitleLabel);
            this.transformationsPanel.Controls.Add(this.yAxisScaleLabel);
            this.transformationsPanel.Controls.Add(this.yAxisScaleTextBox);
            this.transformationsPanel.Controls.Add(this.xAxisScaleLabel);
            this.transformationsPanel.Controls.Add(this.xAxisScaleTextBox);
            this.transformationsPanel.Controls.Add(this.scaleTitleLabel);
            this.transformationsPanel.Controls.Add(this.yAxisTranslationLabel);
            this.transformationsPanel.Controls.Add(this.yAxisTranslationTextBox);
            this.transformationsPanel.Controls.Add(this.xAxisTranslationLabel);
            this.transformationsPanel.Controls.Add(this.xAxisTranslationTextBox);
            this.transformationsPanel.Controls.Add(this.translationTitleLabel);
            this.transformationsPanel.Controls.Add(this.rotationDegreesTitleLabel);
            this.transformationsPanel.Controls.Add(this.executeTransformationsButton);
            this.transformationsPanel.Controls.Add(this.rotationDegreesWordLabel);
            this.transformationsPanel.Controls.Add(this.rotationDegreesTextBox);
            this.transformationsPanel.Dock = System.Windows.Forms.DockStyle.Right;
            this.transformationsPanel.Location = new System.Drawing.Point(318, 0);
            this.transformationsPanel.Margin = new System.Windows.Forms.Padding(2);
            this.transformationsPanel.Name = "transformationsPanel";
            this.transformationsPanel.Size = new System.Drawing.Size(289, 212);
            this.transformationsPanel.TabIndex = 18;
            // 
            // reflectionGroupBox
            // 
            this.reflectionGroupBox.Controls.Add(this.inBothAxesReflectionRadioButton);
            this.reflectionGroupBox.Controls.Add(this.inYReflectionRadioButton);
            this.reflectionGroupBox.Controls.Add(this.inXReflectionRadioButton);
            this.reflectionGroupBox.Location = new System.Drawing.Point(92, 105);
            this.reflectionGroupBox.Name = "reflectionGroupBox";
            this.reflectionGroupBox.Size = new System.Drawing.Size(194, 29);
            this.reflectionGroupBox.TabIndex = 26;
            this.reflectionGroupBox.TabStop = false;
            // 
            // inBothAxesReflectionRadioButton
            // 
            this.inBothAxesReflectionRadioButton.AutoSize = true;
            this.inBothAxesReflectionRadioButton.Location = new System.Drawing.Point(111, 6);
            this.inBothAxesReflectionRadioButton.Name = "inBothAxesReflectionRadioButton";
            this.inBothAxesReflectionRadioButton.Size = new System.Drawing.Size(81, 19);
            this.inBothAxesReflectionRadioButton.TabIndex = 2;
            this.inBothAxesReflectionRadioButton.TabStop = true;
            this.inBothAxesReflectionRadioButton.Text = "em ambos";
            this.inBothAxesReflectionRadioButton.UseVisualStyleBackColor = true;
            // 
            // inYReflectionRadioButton
            // 
            this.inYReflectionRadioButton.AutoSize = true;
            this.inYReflectionRadioButton.Location = new System.Drawing.Point(57, 6);
            this.inYReflectionRadioButton.Name = "inYReflectionRadioButton";
            this.inYReflectionRadioButton.Size = new System.Drawing.Size(51, 19);
            this.inYReflectionRadioButton.TabIndex = 1;
            this.inYReflectionRadioButton.TabStop = true;
            this.inYReflectionRadioButton.Text = "em y";
            this.inYReflectionRadioButton.UseVisualStyleBackColor = true;
            // 
            // inXReflectionRadioButton
            // 
            this.inXReflectionRadioButton.AutoSize = true;
            this.inXReflectionRadioButton.Location = new System.Drawing.Point(3, 6);
            this.inXReflectionRadioButton.Name = "inXReflectionRadioButton";
            this.inXReflectionRadioButton.Size = new System.Drawing.Size(51, 19);
            this.inXReflectionRadioButton.TabIndex = 0;
            this.inXReflectionRadioButton.TabStop = true;
            this.inXReflectionRadioButton.Text = "em x";
            this.inXReflectionRadioButton.UseVisualStyleBackColor = true;
            // 
            // reflectionTitleLabel
            // 
            this.reflectionTitleLabel.AutoSize = true;
            this.reflectionTitleLabel.Location = new System.Drawing.Point(10, 114);
            this.reflectionTitleLabel.Name = "reflectionTitleLabel";
            this.reflectionTitleLabel.Size = new System.Drawing.Size(79, 15);
            this.reflectionTitleLabel.TabIndex = 25;
            this.reflectionTitleLabel.Text = "Fazer reflexão";
            // 
            // yAxisScaleLabel
            // 
            this.yAxisScaleLabel.AutoSize = true;
            this.yAxisScaleLabel.Location = new System.Drawing.Point(200, 79);
            this.yAxisScaleLabel.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.yAxisScaleLabel.Name = "yAxisScaleLabel";
            this.yAxisScaleLabel.Size = new System.Drawing.Size(33, 15);
            this.yAxisScaleLabel.TabIndex = 24;
            this.yAxisScaleLabel.Text = "em y";
            // 
            // yAxisScaleTextBox
            // 
            this.yAxisScaleTextBox.Location = new System.Drawing.Point(150, 77);
            this.yAxisScaleTextBox.Margin = new System.Windows.Forms.Padding(2);
            this.yAxisScaleTextBox.Name = "yAxisScaleTextBox";
            this.yAxisScaleTextBox.Size = new System.Drawing.Size(47, 23);
            this.yAxisScaleTextBox.TabIndex = 23;
            // 
            // xAxisScaleLabel
            // 
            this.xAxisScaleLabel.AutoSize = true;
            this.xAxisScaleLabel.Location = new System.Drawing.Point(111, 79);
            this.xAxisScaleLabel.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.xAxisScaleLabel.Name = "xAxisScaleLabel";
            this.xAxisScaleLabel.Size = new System.Drawing.Size(33, 15);
            this.xAxisScaleLabel.TabIndex = 22;
            this.xAxisScaleLabel.Text = "em x";
            // 
            // xAxisScaleTextBox
            // 
            this.xAxisScaleTextBox.Location = new System.Drawing.Point(60, 77);
            this.xAxisScaleTextBox.Margin = new System.Windows.Forms.Padding(2);
            this.xAxisScaleTextBox.Name = "xAxisScaleTextBox";
            this.xAxisScaleTextBox.Size = new System.Drawing.Size(47, 23);
            this.xAxisScaleTextBox.TabIndex = 21;
            // 
            // scaleTitleLabel
            // 
            this.scaleTitleLabel.AutoSize = true;
            this.scaleTitleLabel.Location = new System.Drawing.Point(10, 77);
            this.scaleTitleLabel.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.scaleTitleLabel.Name = "scaleTitleLabel";
            this.scaleTitleLabel.Size = new System.Drawing.Size(43, 15);
            this.scaleTitleLabel.TabIndex = 20;
            this.scaleTitleLabel.Text = "Escalar";
            // 
            // yAxisTranslationLabel
            // 
            this.yAxisTranslationLabel.AutoSize = true;
            this.yAxisTranslationLabel.Location = new System.Drawing.Point(223, 44);
            this.yAxisTranslationLabel.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.yAxisTranslationLabel.Name = "yAxisTranslationLabel";
            this.yAxisTranslationLabel.Size = new System.Drawing.Size(33, 15);
            this.yAxisTranslationLabel.TabIndex = 19;
            this.yAxisTranslationLabel.Text = "em y";
            // 
            // yAxisTranslationTextBox
            // 
            this.yAxisTranslationTextBox.Location = new System.Drawing.Point(172, 43);
            this.yAxisTranslationTextBox.Margin = new System.Windows.Forms.Padding(2);
            this.yAxisTranslationTextBox.Name = "yAxisTranslationTextBox";
            this.yAxisTranslationTextBox.Size = new System.Drawing.Size(47, 23);
            this.yAxisTranslationTextBox.TabIndex = 18;
            // 
            // xAxisTranslationLabel
            // 
            this.xAxisTranslationLabel.AutoSize = true;
            this.xAxisTranslationLabel.Location = new System.Drawing.Point(133, 44);
            this.xAxisTranslationLabel.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.xAxisTranslationLabel.Name = "xAxisTranslationLabel";
            this.xAxisTranslationLabel.Size = new System.Drawing.Size(33, 15);
            this.xAxisTranslationLabel.TabIndex = 17;
            this.xAxisTranslationLabel.Text = "em x";
            // 
            // xAxisTranslationTextBox
            // 
            this.xAxisTranslationTextBox.Location = new System.Drawing.Point(83, 43);
            this.xAxisTranslationTextBox.Margin = new System.Windows.Forms.Padding(2);
            this.xAxisTranslationTextBox.Name = "xAxisTranslationTextBox";
            this.xAxisTranslationTextBox.Size = new System.Drawing.Size(47, 23);
            this.xAxisTranslationTextBox.TabIndex = 16;
            // 
            // translationTitleLabel
            // 
            this.translationTitleLabel.AutoSize = true;
            this.translationTitleLabel.Location = new System.Drawing.Point(10, 44);
            this.translationTitleLabel.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.translationTitleLabel.Name = "translationTitleLabel";
            this.translationTitleLabel.Size = new System.Drawing.Size(60, 15);
            this.translationTitleLabel.TabIndex = 15;
            this.translationTitleLabel.Text = "Transladar";
            // 
            // shearTitleLabel
            // 
            this.shearTitleLabel.AutoSize = true;
            this.shearTitleLabel.Location = new System.Drawing.Point(10, 146);
            this.shearTitleLabel.Name = "shearTitleLabel";
            this.shearTitleLabel.Size = new System.Drawing.Size(96, 15);
            this.shearTitleLabel.TabIndex = 27;
            this.shearTitleLabel.Text = "Cisalhamento de";
            // 
            // shearInYLabel
            // 
            this.shearInYLabel.AutoSize = true;
            this.shearInYLabel.Location = new System.Drawing.Point(250, 145);
            this.shearInYLabel.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.shearInYLabel.Name = "shearInYLabel";
            this.shearInYLabel.Size = new System.Drawing.Size(33, 15);
            this.shearInYLabel.TabIndex = 31;
            this.shearInYLabel.Text = "em y";
            // 
            // shearInYTextBox
            // 
            this.shearInYTextBox.Location = new System.Drawing.Point(200, 143);
            this.shearInYTextBox.Margin = new System.Windows.Forms.Padding(2);
            this.shearInYTextBox.Name = "shearInYTextBox";
            this.shearInYTextBox.Size = new System.Drawing.Size(47, 23);
            this.shearInYTextBox.TabIndex = 30;
            // 
            // shearInXLabel
            // 
            this.shearInXLabel.AutoSize = true;
            this.shearInXLabel.Location = new System.Drawing.Point(161, 145);
            this.shearInXLabel.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.shearInXLabel.Name = "shearInXLabel";
            this.shearInXLabel.Size = new System.Drawing.Size(33, 15);
            this.shearInXLabel.TabIndex = 29;
            this.shearInXLabel.Text = "em x";
            // 
            // shearInXTextBox
            // 
            this.shearInXTextBox.Location = new System.Drawing.Point(110, 143);
            this.shearInXTextBox.Margin = new System.Windows.Forms.Padding(2);
            this.shearInXTextBox.Name = "shearInXTextBox";
            this.shearInXTextBox.Size = new System.Drawing.Size(47, 23);
            this.shearInXTextBox.TabIndex = 28;
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(607, 307);
            this.Controls.Add(this.transformationsPanel);
            this.Controls.Add(this.infosAndScreenInteractionsPanel);
            this.Controls.Add(this.canvasContainer);
            this.Margin = new System.Windows.Forms.Padding(2);
            this.Name = "MainForm";
            this.Text = "Roteiro 1 - Ambientação e Transformações Geométricas";
            ((System.ComponentModel.ISupportInitialize)(this.canvasContainer)).EndInit();
            this.infosAndScreenInteractionsPanel.ResumeLayout(false);
            this.infosAndScreenInteractionsPanel.PerformLayout();
            this.transformationsPanel.ResumeLayout(false);
            this.transformationsPanel.PerformLayout();
            this.reflectionGroupBox.ResumeLayout(false);
            this.reflectionGroupBox.PerformLayout();
            this.ResumeLayout(false);

    }

    #endregion
    private PictureBox canvasContainer;
    private TextBox xCoordinateTextBox;
    private Label xCoordinateLabel;
    private Button clearScreenButton;
    private Button chooseColorButton;
    private ColorDialog ColorDialog;
    private Button drawPointButton;
    private TextBox yCoordinateTextBox;
    private Label yCoordinateLabel;
    private ListBox pointListBox;
    private Button executeTransformationsButton;
    private Label rotationDegreesWordLabel;
    private TextBox rotationDegreesTextBox;
    private Label rotationDegreesTitleLabel;
    private Panel infosAndScreenInteractionsPanel;
    private ListBox matrixListBox;
    private Panel transformationsPanel;
    private Label yAxisTranslationLabel;
    private Label xAxisTranslationLabel;
    private TextBox xAxisTranslationTextBox;
    private Label translationTitleLabel;
    private TextBox yAxisTranslationTextBox;
    private Label yAxisScaleLabel;
    private TextBox yAxisScaleTextBox;
    private Label xAxisScaleLabel;
    private TextBox xAxisScaleTextBox;
    private Label scaleTitleLabel;
    private Label resultingMatrixLabel;
    private Label pointListLabel;
    private Label reflectionTitleLabel;
    private GroupBox reflectionGroupBox;
    private RadioButton inBothAxesReflectionRadioButton;
    private RadioButton inYReflectionRadioButton;
    private RadioButton inXReflectionRadioButton;
    private Label shearInYLabel;
    private TextBox shearInYTextBox;
    private Label shearInXLabel;
    private TextBox shearInXTextBox;
    private Label shearTitleLabel;
}