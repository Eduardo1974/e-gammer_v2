package br.gov.sp.fatec.egammer.domain.venda;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import br.gov.sp.fatec.egammer.domain.game.Game;
import br.gov.sp.fatec.egammer.util.View;

@Entity
@Table(name = "ITEM_PEDIDO") 
public class ItemPedido {
	
	@Id 
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "ite_codigo")
	@JsonView( View.Pedido.class)
	private Long codigo;
	
	@Column(name = "ite_preco", nullable = false)
	@JsonView( View.Pedido.class)
	private Double precoUnit;
	
	@Column(name = "ite_quant",  nullable = false)
	@JsonView( View.Pedido.class)
	private Integer quantidade;
	
	@Column(name = "ite_total",  nullable = false)
	@JsonView( View.Pedido.class)
	private Double precoTotal;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "ped_codigo", nullable = true)
	private Pedido pedido;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "gam_codigo", nullable = true)
	@JsonView( View.Pedido.class)
	private Game game;

	public Double getPrecoUnit() {
		return precoUnit;
	}

	public void setPrecoUnit(Double precoUnit) {
		this.precoUnit = precoUnit;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public Double getPrecoTotal() {
		return precoTotal;
	}

	public void setPrecoTotal(Double precoTotal) {
		this.precoTotal = precoTotal;
	}

	public Pedido getPedido() {
		return pedido;
	}

	public void setPedido(Pedido pedido) {
		this.pedido = pedido;
	}

	public Game getGame() {
		return game;
	}

	public void setGame(Game game) {
		this.game = game;
	}

	public Long getCodigo() {
		return codigo;
	}
}
